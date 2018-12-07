$(document).ready(function() {
    //Takes what is in the input fields and writes them in all divs
    $('#submit').on("click", function(){
          console.log("clicked");
          var driverName = $("#drivername").val().trim();
          var loadType = $("#loadtype").val().trim();
          var dq = $("#dq").val().trim();
          var recuiter = $("#recuiter").val().trim();
          var singleint = $("#singleint").val().trim();
          var singleDate = $("#singleDate").val().trim();
          var location = $("#location").val().trim();
          var company = $("#company").val().trim();
          var test = $("#test").val().trim();
          var username = $("#username").val().trim();
          var password = $("#password").val().trim();
          var status = $("#status").val().trim();
          var phone = $("#phone").val().trim();
          var ssn = $("#SSN").val().trim();
          var doc = $("#doc").val().trim();
          event.preventDefault();
          $('.write-driver').text(driverName)
          $('.write-dq').text(dq)
          $('.write-type').text(loadType)
          $('.write-recuiter').text(recuiter)
          $('.write-singleint').text(singleint)
          $('.write-singleDate').text(singleDate)
          $('.write-SSN').text(ssn)
          $('.write-location').text(location)
          $('.write-company').text(company)
          $('.write-test').text(test)
          $('.write-username').text(username)
          $('.write-password').text(password)
          $('.write-status').text(status)
          $('.write-phone').text(phone)

          
    })
})