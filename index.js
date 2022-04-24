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
        userInput.classList.add("error-outline");
       error.classList.remove("hidden");
   } else {
    alert("Congratulations! You have successfully subscribed.");
    userInput.value="";
    userInput.classList.remove("error-outline");
    error.classList.add("hidden");
   }
})