playlist = {
    "songs": []
}

def add_song(title, artist, genre):
    song = {
        "title": title,
        "artist": artist,
        "genre": genre
    }
    playlist["songs"].append(song)

def update_song(title, new_artist=None, new_genre=None):
    for song in playlist["songs"]:
        if song["title"].lower() == title.lower():
            if new_artist:
                song["artist"] = new_artist
            if new_genre:
                song["genre"] = new_genre
            print(f"Updated song: {song}")  
            return
    print("Sorry the song is not found in this playlist")              

def delete_song(title):
    for song in playlist["songs"]:
        if song["title"].lower() == title.lower():
            playlist["songs"].remove(song)
            print(f"Deleted song: {title}")
            return
    print("Sorry the song is not found in this playlist")

def view_playlist():
    if not playlist["songs"]:
        print("Playlist is empty")
    else:
        print("Playlist:")
        for song in playlist["songs"]:
            print(f"Title: {song['title']}, Artist: {song['artist']}, Genre: {song['genre']}")

def prompt_update_song():
    title = input("Enter the title of the song to update: ")
    new_artist = input("Enter the new artist (press enter to skip): ").strip() or None
    new_genre = input("Enter the new genre (press enter to skip): ").strip() or None
    
    update_song(title, new_artist, new_genre)

def prompt_delete_song():
    title = input("Enter the title of the song to delete: ")
    delete_song(title)

add_song("Never Forget", "Take That", "Pop")
add_song("Let's Get Ready to Rhumble", "PJ and Duncan", "Pop")
add_song("Stop this Flame", "Celeste", "Soul")
add_song("16", "Craig David", "Pop")
add_song("Acquiesce", "Oasis", "Brit pop")
add_song("You got the love", "Candi Staton", "Dance")
add_song("Ice Ice Baby", "Vanilla Ice", "Pop")

print("Before Update:")
view_playlist()

prompt_update_song()

print("\nAfter Update:")
view_playlist()

prompt_delete_song()

print("\nAfter Deletion:")
view_playlist()

