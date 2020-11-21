// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph");

for(let heart of hearts) {
  heart.addEventListener("click", function(){
    mimicServerCall()
    .then(function(serverMessage){
      console.log(serverMessage)
      if (heart.className === "activated-heart") {
        heart.classList.remove("activated-heart")
        heart.innerText = '♡'
      } else {
        heart.className = "activated-heart"
        heart.innerText = '♥'
      }
    })
    .catch(function(error){
      let errorModal = document.getElementById("modal")
      errorModal.classList.remove("hidden")
      setTimeout(function(){
        errorModal.className = "hidden";
      }, 5000)
    })  
  })
}



//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
