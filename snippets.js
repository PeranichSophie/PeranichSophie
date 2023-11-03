function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "peranichsophie@gmail.com",
    Password: "7400692F834FE72EFA54C908EBF66600831B",
    To: "peranichsophie@gmail.com",
    From: doccument.getElementById("email").value,
    Subject: "New Connect from Website Inquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br/> Email: " +
      document.getElementById("email").value +
      "<br/> Message: " +
      document.getElementById("message").value +
      "<br/>",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}
