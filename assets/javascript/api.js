//array nintendo character names as strings

var characters = ["mario", "luigi", "princess peach", "bowser", "wario", "koopa"];

//console.log(characters);

//for loop that cycles through the array and creates buttons for each string
    //(use something that appends for each string)

for (var i = 0; i < 6; i++) {
    document.write(characters);
}

//link to Giphy API, displays 10 results

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=hZqu2JbYxTSrSs8rKHrSPZV6ZVhYYp30&limit=10");
    xhr.done(function(data) 
    { console.log("success got data", data); });

//AJAX call to Giphy API?


//function that animates a gif when clicked