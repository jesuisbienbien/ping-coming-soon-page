const form = document.getElementById("form");
const userInput = document.getElementById("email");
const error = document.getElementById("error");

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

form.addEventListener("submit", (e) => {
    e.preventDefault();
   if(!(validateEmail(userInput.value)) | userInput.value===""){
       if(userInput.value===""){
           error.innerHTML="Whoops! It looks like you forgot to add your email";
       }else {
           error.innerHTML="Please provide a valid email address";
       }
       error.classList.remove("hidden");
       userInput.classList.add("error-outline");

   } else {
    userInput.classList.remove("error-outline");
    error.classList.add("hidden");
    userInput.value="";
    alert("Congratulations! You have successfully subscribed.");
    
   }
})