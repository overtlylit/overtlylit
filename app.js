// alert ("Hello world");




// const questionForm = document.getElementById("aa-form-id");

// aa-form-id.addEventListener("submit", function (e) => {
//   e.preventDefault();

//   const Name = document.getElementById("Name");
//   const Email = document.getElementById("Email");
//   const Message = document.getElementById("Message");

//   if (Name.value == "" || Message.value == "") {
//     alert("Ensure you input a value in both fields!");
//   } else {
//     // perform operation with form input
//     alert("This form has been successfully submitted!");
//     console.log(
//       `This form has a name of ${Name.value} and question of ${Message.value}`
//     );

//     Name.value = "";
//     Message.value = "";
//   }
// });


// form.submit();




// agony aunt question form 

var form = document.getElementById("form")

form.addEventListener("submit",function(event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  console.log(name);

  var email = document.getElementById("email").value;
  console.log(email);

  var question = document.getElementById("question").value;
  console.log(question);

  if (name.value == "" || question.value == "") {
    alert("Please ensure you enter a name and a question!");
  } else {
    alert("Your question has been successfully submitted, thank you!");
  }

});