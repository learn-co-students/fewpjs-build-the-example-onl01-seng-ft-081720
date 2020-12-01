// Defining text characters for the empty and full hearts for you to use later.



const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likes = document.querySelectorAll('span.like-glyph')
function thisIsBullshit(e){
  let heart = e.target;
  mimicServerCall()
  .then(function(serverMessage){
    alert("You notified the server!");
     alert(serverMessage);
     heart.innerText = FULL_HEART;
     heart.style.color = red;
  })
  .catch(function(error) {
    alert("Something went wrong!");
  });
}

for (let glyph of likes) {
  glyph.addEventListener("click", thisIsBullshit);
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
