// Main JavaScript File

// You'll have to wait for you page to load to assign events to the elements created in your index.html file
$(function() {
  // URL for searching for songs
  var songURL = 'https://api.spotify.com/v1/search?type=track&query=';

  // Search songs function
  var searchSongs = function() {
      // Empty the images div


      // Get the value from the input box


      // Make an AXAX request to the `songURL` + value from the input


        // For each item that is returned, append an image with the imageURL associated with the songURL
        

  };

  // Assign a click event to your button with id `search-btn` to execute your `searchSongs` function
  $('#search-btn').on('click', searchSongs)
});
