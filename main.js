// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = {
  '♡': '♥',
  '♥': '♡'
}

const colors = {
  'activated-heart': '',
  '': 'activated-heart'
}

// Your JavaScript code goes here!

// Select all li likes
const likes = document.querySelectorAll(".like")

// Add event listener for each like

function addLike(event) {
  let heartBox = event.target;
  let heart = event.target.firstElementChild

  mimicServerCall()
  .then(function(likeEvent){
    heart.innerText = hearts[heart.innerText]
    if (heart.innerText == "♡") {
      heart.classList.remove("activated-heart")
    } else {
      heart.classList.add("activated-heart")
    }
  })
  .catch(function(error) {
    hideModal()
  });
};

function hideModal() {
  document.getElementById("modal").className = "";
  setTimeout(function() {document.getElementById("modal").className = "hidden"}, 5000);
};

for (let like of likes) {
  like.addEventListener("click", addLike)
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
