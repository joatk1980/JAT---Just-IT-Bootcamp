const toggleButton = document.querySelector("#toggleButton");
const colorName = document.querySelector("#colorName");
const catButton = document.querySelector("#catButton");
const catImage = document.querySelector("#catImage");

const colors = ["pink", "green", "yellow"];
let currentIndex = 0;

// toggleButton.addEventListener("click", function () {
//   const curColour = document.body.style.backgroundColor;
//   if (curColour === "pink") {
//     document.body.style.backgroundColor = "green";
//   } else {
//     document.body.style.backgroundColor = "pink";
//   }
// });

//declares function and retrieves the initial color from the colors array using currentIndex var, set to 0, initialColo is first colour in the array
function setInitialBackgroundColor() {
  const initialColor = colors[currentIndex];
  //sets the background colour of the entire web page document.body to the initialColor
  document.body.style.backgroundColor = initialColor;
  //updates the text content of the colorName element to display the name of the current color, capitilizes char and converts rest to upper case
  colorName.textContent =
    initialColor.charAt(0).toUpperCase() + initialColor.slice(1).toUpperCase();
  //adds css class to the colorName element
  colorName.classList.add("styled-text");
}

toggleButton.addEventListener("click", function () {
  // Cycle to the next color
  currentIndex = (currentIndex + 1) % colors.length;
  const newColor = colors[currentIndex];

  // Change the background color
  document.body.style.backgroundColor = newColor;

  // Display the name of the current color
  colorName.textContent =
    newColor.charAt(0).toUpperCase() + newColor.slice(1).toUpperCase();
  colorName.classList.add("styled-text");
});

catButton.addEventListener("click", () => {
  //code checks the current display style of the toggleImage element - if display is none changes the diplay style and updates the button text to Hide Image
  if (catImage.style.display === "none") {
    catImage.style.display = "block";
    catButton.textContent =
      "Click here if you DO NOT want to see a picture of a cat?";
  }
  //if display style is not none (image vis) changes display style to none to hide the image and update the button text to Show Image
  else {
    catImage.style.display = "none";
    catButton.textContent = "Click here if YOU WANT to see a picture of a cat?";
  }
});

//Set the initial background colour when the page loads
window.addEventListener("load", setInitialBackgroundColor);
