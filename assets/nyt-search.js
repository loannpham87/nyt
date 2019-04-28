    //global variables
    var search_value = " ";
    //display function re-renders the HTML to display the appropriate content
    function search(srchP){
 //create an AJAX call method  for specific button being clicked
 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
 + srchP + "&api-key=1XvkJESOHTvv8e6dDRwJliRGiAAPUSkQ"    
  $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        var data = response.response.docs;
        console.log(data)
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].headline.main)
       var tittle = $('<h2>').text(data[i].headline.main)
        var source = $('<h4>').text(data[i].source)
            console.log(data[i].source)
    }
      });
    //need back end code to populate articles here
    $(".articles")
    
    }
   $('form').on('submit', function(event){
    event.preventDefault()
    console.log("submit")
    search_value = $("#search-term").val()
    search(search_value);
   })
   
