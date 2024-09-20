def welcome_message(): #welcome message for user
    print("----------------- Welcome to my Python quiz! ----------------- \nTest your Python knowledge and see how many questions you can get right!")

welcome_message()  #calls the welcome message and displays it in the console

def ask_user_question(question, options, correct_answer): #function takes 3 arguments 
    print("\n" + question) # prints the question with a new line character to create some space 
    for i in range(len(options)):  #for loop to iterate the options list - len() to return number of answer options
        print(f"{i + 1}. {options[i]}") #loop prints option number and corresponding option text 


#while loop to ensure user inputs valid options and compates user answer to the correct one - returns True and correct answer if correct, otherwise returns False
    while True:    
        answer = input("Your answer (Please enter option 1-4): ") 
        if answer not in ['1', '2', '3', '4']:
            print("Error: Please only enter options from 1-4, Thank you")
        
        else:    
            return int(answer) == correct_answer, correct_answer   #converts user_input entered as a string to an integer so it can check against the correct answer which is an integer - returns boolean value depending on whether users answer is correct or not and returns the correct answer itself 

# function to manage quiz questions and answers - contains list of dictionaries = each dictionary is a quiz question with possible answers and correct answer index
def main_screen():
    questions = [
        {
            "question": "What is the definition of a 'Dictionary' in Python?",
            "options": ["A mutable data structure that allows you to store key-value pairs" , "A data structure that is very similar to lists", "A data type used to store several items in a single variable", "A reference book that lists alphabetical order terms or names" ],
            "correct_answer": 1
        },
        {
            "question": "What does the len() function do in Python?",
            "options": ["Returns the length of an object", "Returns the type of an object", "Returns the value of an object", "Returns the id of an object"],
            "correct_answer": 1
         },
        {
            "question": "What does the print() function do in Python?",
            "options":["Prints a piece of paper from your printer", "Asks you what code you want to see", "Sends data to standard output by default", "Marks the end of a function and specifies the value or values to pass back from the function"],
            "correct_answer": 3
        },
        {   "question": "What is the definition of a Tuple in Python?",
            "options":["A data structure that can only store integers", "A set list of elements that cannot be changed", "A set unordered collection of unique elements", "A type of loop used for iterating over sequences"],
            "correct_answer": 2
        },
        {
            "question": "What is the best way to define a function in Python?",
            "options":["function myFunction():", "define myFunction():", "def myFunction():", "func myFunction():"],
            "correct_answer": 3
        },
            {
            "question": "What is the definition of a Set in Python?",
            "options":["An ordered collection of elements that allows duplicate values", "A set of variables to store data", "A set list of elements that cannot be changed", "An unordered collection that does not allow duplicate values"],
            "correct_answer": 4
            }   

    ]


# for loop iterates over each of the questions and calls ask_user_question function to display the question and collect the users answer - score increases on whether the question is answered correctly or not and prints total score at the end 
    score = 0
    for q in questions:
        is_correct, correct_answer = ask_user_question(q["question"], q["options"], q["correct_answer"])
        if is_correct:
            print("You are correct!")
            score += 1
        else:
            print(f"You are incorrect.  The correct answer was option {correct_answer}.")    
          

    print(f"\nYour total score is : {score} out of 6")  
    return score


# executes the main code block and checks whether the script is being run directly - if it is then the code in the IF block will be executed  

if __name__ == "__main__":
    while True:
        score = main_screen()   
        
        if score == 6:
            print("Congratulations you have scored full marks :) ")
            break
        
        while True:
            again = input("Would you like to retake the Python Quiz? (y/n)").strip().lower()           
            if again in ['y', 'n']:
                break
            else:
                print("Invalid input. Please enter 'y' or 'n' ")

        if again != 'y':
            print("Thanks for playing my Python Quiz")
            break  

    # after completing the quiz it asks the user if they would like to retake it - if they answer y the quiz restarts of n then the user gets a thank you message and the quiz terminates - also considers error handling to ensure user input is either y or n  - if user has scored full marks then the loop breaks and they get a Congratulations message   