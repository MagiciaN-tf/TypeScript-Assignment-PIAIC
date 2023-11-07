function make_album(artist: string, title: string, tracks?: number): object {
    const album = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album["tracks"] = tracks;
    }
  
    return album;
  }
  
  // Creating album objects using make_album() function
  const album1 = make_album("Artist 1", "Album 1");
  const album2 = make_album("Artist 2", "Album 2", 10);
  const album3 = make_album("Artist 3", "Album 3", 5);
  
  // Printing the album objects
  console.log(album1);
  console.log(album2);
  console.log(album3);
  