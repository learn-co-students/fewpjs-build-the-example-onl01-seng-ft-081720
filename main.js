// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const likeSpan = document.querySelectorAll("span")

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("modal").className = "hidden"
  
})

// ADD eventListeners TO ALL SPAN
likeSpan.forEach(function(el){
  el.addEventListener("click", function(event){
    let currentSpan = event.currentTarget
    mimicServerCall()
    .then(function(){
      console.log(currentSpan)
      if(currentSpan.innerText !== FULL_HEART){
      currentSpan.innerText = FULL_HEART
      currentSpan.classList.add("activated-heart")
    } else {
      currentSpan.innerText = EMPTY_HEART
      currentSpan.classList.remove("activated-heart")

      }
    })
    .catch(function(errors){
      document.getElementById("modal").classList.remove("hidden")
    })
  })
})



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
