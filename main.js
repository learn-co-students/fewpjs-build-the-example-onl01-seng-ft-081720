// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const heart = document.querySelectorAll('.like-glyph')

for (const glyph of heart) {
  glyph.addEventListener('click', function(e) {
    e.preventDefault()
    mimicServerCall()
    .then(() => {
      if(e.target.innerText == EMPTY_HEART) {
        e.target.setAttribute('class', 'activated-heart')
        e.target.innerText = FULL_HEART
      } else{
        e.target.classList.remove('activate-heart')
        e.target.innerText = EMPTY_HEART
      }
    })
    .catch((error) => {
      console.error(`error: ${error}`)
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
