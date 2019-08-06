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
setInterval(function(){ getPosts(); }, 2000);


function getPosts() {
  $.ajax({
    url: "/api/posts",
    type: "GET",
    success: function (data) {
      $(".post-wrapper").html("");
      for (var i = 0; i < data.length; i++) {
        var html = "";
        var micStatus = 'no';
        if(data[i].mic) {
          micStatus = 'yes';
        }
        html = html + '<div class="row">';
        html = html + '<div class="postid col col-2">' + data[i].user_name +'</div>';
        html = html + '<div class="postgame col col-2">' + data[i].game_name + '</div>';
        html = html + '<div class="quotes col col-3">' + data[i].userText + '</div>';
        html = html + '<div class="micsetting col col-1">' + micStatus + '</div>';
        html = html + '<div class="platform col col-2">' + data[i].platform + '</div>';
        html = html + '<div class="timestemp col col-2">' + data[i].createdAt + '</div>';
        html = html + '</div>';
        $(".post-wrapper").prepend(html);
      }
    }

  });
}

$("#searchButt").on("click", function (event){
  event.preventDefault();
  var gameName = $("#gameSearch").val();
  $.get("/api/posts/"+gameName).then(
    function (data) {
      var html = "";
      for (var i = 0; i < data.length; i++) {
        var micStatus = 'no';
        if(data[i].mic) {
          micStatus = 'yes';
        }
        html = html + '<div class="row">';
        html = html + '<div class="postid col col-2">' + data[i].user_name +'</div>';
        html = html + '<div class="postgame col col-2">' + data[i].game_name + '</div>';
        html = html + '<div class="quotes col col-3">' + data[i].userText + '</div>';
        html = html + '<div class="micsetting col col-1">' + micStatus + '</div>';
        html = html + '<div class="platform col col-2">' + data[i].platform + '</div>';
        html = html + '<div class="timestemp col col-2">' + data[i].createdAt + '</div>';
        html = html + '</div>';
        
      }
      $(".post-wrapper").html(html);
    }
  )
})
