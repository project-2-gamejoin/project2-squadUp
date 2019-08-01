/* global moment */

// When the page loads, grab and display all of our chirps
$.get("/api/all", function(data) {

    if (data.length !== 0) {
  
      for (var i = 0; i < data.length; i++) {
  pl;
        var row = $("<div>");
        row.addClass("user");
  
        row.append("<p>" + data[i].id-input + " Username: </p>");
        row.append("<p>" + data[i].game-input + "</p>");
        row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
  
        $("#user-area").prepend(row);
  
      }
  
    }
  
  });
  
  // When user adds new input (clicks postbutton)
  $("#post-button").on("click", function(event) {
    event.preventDefault();
  
    // Make a newChirp object
    var newInput = {
      userName: $("#id-input").val().trim(),
      userText: $("#post-input").val().trim(),
      gameName: $("#game-input").val().trim(),
      created_at: moment().format("YYYY-MM-DD HH:mm:ss")
    };
  
    console.log(newInput);
});
//     // Send an AJAX POST-request with jQuery
//     $.post("/api/new", newInput)
//       // On success, run the following code
//       .then(function() {
  
//         var row = $("<div>");
//         row.addClass("chirp");
  
//         row.append("<p>" + newChirp.author + " chirped: </p>");
//         row.append("<p>" + newChirp.body + "</p>");
//         row.append("<p>At " + moment(newChirp.created_at).format("h:mma on dddd") + "</p>");
  
//         $("#chirp-area").prepend(row);
  
//       });
  
//     // Empty each input box by replacing the value with an empty string
//     $("#author").val("");
//     $("#chirp-box").val("");
//   });
  