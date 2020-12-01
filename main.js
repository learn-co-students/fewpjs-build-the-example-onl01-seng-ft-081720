// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const modal = document.getElementById('modal');
modal.classList.add("hidden");

const modalMessage = document.getElementById("modal-message")

const hearts = document.querySelectorAll(".like-glyph");

for(let heart of hearts) {
  heart.addEventListener('click', function(e) {
    mimicServerCall()
    .then(heart => {
      console.log(heart);
      if(e.target.innerText == FULL_HEART) {
        e.target.innerText = EMPTY_HEART
      } else {
        e.target.innerText = FULL_HEART
      }
    })
    .catch(error => {
      modalMessage.innerText = error.message;
      modal.classList.remove("hidden");
      setTimeout(function() {
        modalMessage.innerText = "";
        modal.classList.add("hidden");
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
