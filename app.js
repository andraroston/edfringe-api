$(document).ready(function(){

    $("#submitButton").on("click", function() {
    event.preventDefault();
    console.log("Submit Button Clicked");
    $(".instructions").fadeOut();
    getPhotos();
    $("#photos").show();

    });

});



var getPhotos = function() {

//  var request = ?????

  var result = $.ajax({
    url: "https://api.instagram.com/v1/tags/edfringe/media/recent?access_token=493860900.1fb234f.b7fe5dee22b542ca80c8c740db3b038d&callback=callbackFunction",
    dataType: "jsonp",
    cache: false,
    type: "GET",
  })
  .done(function(result){

    console.log("success!")



      for(var i = 0; i < 18; i++)

    
    console.log(result.data[i].images.thumbnail.url);
  }

)

}

//<img src= url/>




