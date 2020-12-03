// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

let articleHearts = document.querySelectorAll(".like");

///
let likeButtons = document.querySelectorAll(".like")
for (ele of likeButtons){
  ele.addEventListener("click", (e) => {
    mimicServerCall()
    .then((respond) => {
      if (e.target.className = "like-glyph"){
        e.target.innerText = FULL_HEART
        e.target.className = "activated-heart"
      } else {
        e.target.className = "like-glyph"
        e.target.innerText = EMPTY_HEART
      }
    })
    .catch((error) => {
      document.getElementById("modal").className = ""
      setTimeout(function() {
        document.getElementById("modal").className = "hidden"
      }, 5000);
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
