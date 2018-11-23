$(document).ready(function() {
    //Takes what is in the input fields and writes them in all divs
    $('#submit').on("click", function(){
          console.log("clicked");
          var driverName = $("#drivername").val().trim();
          var loadType = $("#loadtype").val().trim();
          event.preventDefault();
          $('.write-driver').text(driverName)
          $('.write-type').text(loadType)
          
    })
})