/* global moment */

// When the page loads, grab and display all of our chirps
// $.get("/api/all", function(data) {

//     if (data.length !== 0) {

//       for (var i = 0; i < data.length; i++) {
//   pl;
//         var row = $("<div>");
//         row.addClass("user");

//         row.append("<p>" + data[i].id-input + " Username: </p>");
//         row.append("<p>" + data[i].game-input + "</p>");
//         row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

//         $("#user-area").prepend(row);

//       }

//     }

//   });

// When user adds new input (clicks postbutton)
$("#btn").on("click", function (event) {
  event.preventDefault();

  // Make a newChirp object

  var newInput = {
    user_name: $("#id-input").val().trim(),
    userText: $("#post-input").val().trim(),
    game_name: $("#game-input").val().trim(),
    platform: $("#platforme").val().trim(),
    mic: $("input[name=mic]:checked").val().trim(),
  };

  console.log(newInput);

  $.ajax({
    url: "/api/make",
    type: "POST",
    data: newInput,
    success: function (data, textStatus, jqXHR) {
      console.log(data);
      getPosts();

    }
  });
});
getPosts();
setInterval(function(){ getPosts(); }, 1000);

function getPosts() {
  $.ajax({
    url: "/api/posts",
    type: "GET",
    success: function (data, textStatus, jqXHR) {
      var html = "";
      for (var i = 0; i < data.length; i++) {
        html = html + '<div class="row">';
        html = html + '<div class="postid col">' + data[i].user_name +'</div>';
        html = html + '<div class="postgame col">' + data[i].game_name + '</div>';
        html = html + '<div class="quotes col">' + data[i].userText + '</div>';
        html = html + '<div class="micsetting col">' + data[i].mic + '</div>';
        html = html + '<div class="timestemp col">' + data[i].createdAt + '</div>';
        html = html + '</div>';
        
      }
      $(".post-wrapper").html(html);
    }
  });
}
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
