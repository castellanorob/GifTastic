// Event listener for button elements

$("button").on("click", function(){

//array nintendo character names as strings

var characters = ["mario", "luigi", "princess peach", "bowser", "wario", "koopa"];


//for loop that cycles through the array and creates buttons for each string
    //(use something that appends for each string)

for (var i = 0; i < characters.length; i++) {
    document.createElement("button");
}
//console.log(characters);

//link to Giphy API, displays 10 results

var queryUrl = "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=hZqu2JbYxTSrSs8rKHrSPZV6ZVhYYp30&limit=10";

    //AJAX Get request

    $.ajax({
        url: queryUrl,
        method: "GET"
    })

    .done(function(response){
        var results = response.data;
    // Looping over every result item
        for (var i = 0; i < results.length; i++) {
        
            // Only taking action if the photo has an appropriate rating
            if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
                // Creating a div with the class "item"
                var gifDiv = $("<div class='item'>");
        
                // Storing the result item's rating
                var rating = results[i].rating;
        
                // Creating a paragraph tag with the result item's rating
                var p = $("<p>").text("Rating: " + rating);
            
                // Creating an image tag
                var personImage = $("<img>");
            
                // Giving the image tag an src attribute of a property pulled off the
                // result item
                personImage.attr("src", results[i].images.fixed_height.url);
            
                // Appending the paragraph and personImage we created to the "gifDiv" div we created
                gifDiv.append(p);
                gifDiv.append(personImage);
            
                // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
                ("#gifs-appear-here").prepend(gifDiv);
            }
        }
    });

});
//function that animates a gif when clicked