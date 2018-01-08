// Array of character names 

var characters = ["mario", "luigi", "princess peach", "bowser", "wario", "koopa"];

// displayCharacters function re-renders the HTML to display the appropriate content
function displayCharacters() {
    
            var character = $(this).attr("data-name");
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            character + "&api_key=hZqu2JbYxTSrSs8rKHrSPZV6ZVhYYp30&limit=10";
    
            

            // Creating an AJAX call for the specific character name button being clicked
            $.ajax({
              url: queryURL,
              method: "GET"
            }).done(function(response) {

                //console.log(queryURL);
                
                //console.log(response);
              // storing the data from the AJAX request in the results variable
              var results = response.data;

              for (var i = 0; i < results.length; i++) {
              // Creating a div to hold the character gif
              var characterDiv = $("<div class='character'>");

              // Creating a paragraph tag with the result item's rating
              var p = $("<p>").text("Rating: " + results[i].rating);
    
              // Creating an element to hold the image
              var characterImage = $("<img>")
              
              // Setting the src attribute of the image to a property pulled off the result item
              characterImage.attr("src", results[i].images.fixed_height.url);

              // Appending the image
              characterDiv.append(p);
              characterDiv.append(characterImage);
    
             
              $("#gif-display").prepend(characterDiv);
              }
            });
    
          }
         
        // Function for displaying character data
        function renderButtons() {
    
            // Deleting the characters prior to adding new characters
            $("#name-display").empty();
    
            // Looping through the array of characters
            for (var i = 0; i < characters.length; i++) {
    
              // Then dynamicaly generating buttons for each character in the array
              var a = $("<button>");
              // Adding a class of character to our button
              a.addClass("character");
              // Adding a data-attribute
              a.attr("data-name", characters[i]);
              // Providing the initial button text
              a.text(characters[i]);
              // Adding the button to the name-disply div
              $("#name-display").append(a);
            }
        }
    
        // This function handles events where a character button is clicked
        $("#add-character").on("click", function(event) {
            event.preventDefault();
            // This line grabs the input from the textbox
            var character = $("#character-input").val().trim();
    
            // Adding character from the textbox to our array
            characters.push(character);
    
            // Calling renderButtons which handles the processing of our character array
            renderButtons();
        });

        $("#gif-display").on("click", function() {
            // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
            var state = $(this).attr("data-state");
            // If the clicked image's state is still, update its src attribute to what its data-animate value is.
            // Then, set the image's data-state to animate
            // Else set src to the data-still value
            if (state === "still") {
              $(this).attr("src", $(this).attr("data-animate"));
              $(this).attr("data-state", "animate");
            } else {
              $(this).attr("src", $(this).attr("data-still"));
              $(this).attr("data-state", "still");
            }
          });
    
          // Adding a click event listener to all elements with a class of "character"
          $(document).on("click", ".character", displayCharacters);
    
          // Calling the renderButtons function to display the intial buttons
          renderButtons();