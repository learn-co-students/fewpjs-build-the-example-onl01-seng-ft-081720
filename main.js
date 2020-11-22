// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll(".like-glyph").forEach( el => {
  el.addEventListener("click",(e) => {
    mimicServerCall()
    .then(object => {
      console.log(object);
      if (e.target.innerText == FULL_HEART) {
        e.target.innerText = EMPTY_HEART
      } else {
        e.target.innerText = FULL_HEART
      }
    })
    .catch(error => {
      document.getElementById("modal-message").innerText = error.message;
      document.getElementById("modal").classList.remove("hidden");
      setTimeout(function(){ 
        document.getElementById("modal-message").innerText = "";
        document.getElementById("modal").classList.add("hidden");
       }, 5000);
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
