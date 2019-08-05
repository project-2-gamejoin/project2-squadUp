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
// setInterval(function(){ getPosts(); }, 1000);

function getPosts() {
  $.ajax({
    url: "/api/posts",
    type: "GET",
    success: function (data, textStatus, jqXHR) {
      $(".post-wrapper").html("");
      for (var i = 0; i < data.length; i++) {
        var html = "";
        html = html + '<div class="row">';
        html = html + '<div class="postid col">' + data[i].user_name +'</div>';
        html = html + '<div class="postgame col">' + data[i].game_name + '</div>';
        html = html + '<div class="quotes col">' + data[i].userText + '</div>';
        html = html + '<div class="micsetting col">' + data[i].mic + '</div>';
        html = html + '<div class="platform col">' + data[i].platform + '</div>';
        html = html + '<div class="timestemp col">' + data[i].createdAt + '</div>';
        html = html + '</div>';
        $(".post-wrapper").prepend(html);
      }
    }
  });
}