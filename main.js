// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener("DOMContentLoaded", () => {

  // STEP 1
  let modal = document.getElementById("modal")
      // =>> div tag containing error content

  // STEP 2
  // NOTE 2 examples below: hearts can be either an HTMLCollection (w/getElement) or a Nodelist (w/querySelector)

  let hearts = document.getElementsByClassName("like-glyph")
      // =>> HTMLCollection of 5 hearts

  // let hearts = document.querySelectorAll(".like-glyph")
  //     // =>> Nodelist with 5 hearts

  // console.log(hearts)  //   <<= test to reveal variables' content


    // STEP 3
    // NOTE Use for-each or for-of to add a click listener to each heart
    // NOTE Click a heart to test
    for (const heart of hearts) {
      heart.addEventListener("click", (e) => {
    // console.log("That tickles")   //  <<= click a heart to test if click event works

  
      // // NOTE What does mimicServerCall() return ??
      // let whatIsThis = mimicServerCall()
      // console.log(whatIsThis)   //  <<= click a heart to test to see variable content
      // // mimicServerCall() returns a Promise with PromiseState: "pending" AND PromiseResult: undefined

      // STEP 4
      // NOTE Grab the clicked heart
      // NOTE [Element.removeAttribute(attrName)]   https://developer.mozilla.org/en-US/docs/Web/API/Element/removeAttribute
      // NOTE [Element.setAttribute(name, value)] https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
          mimicServerCall()
          .then(() => {
            if (heart.innerHTML == EMPTY_HEART) {
              // modal.hidden = true
              heart.innerHTML = FULL_HEART    // <<= all clicked hearts should turn full (shaded in)
              heart.className = "activated-heart"
            } else {
              // modal.hidden = true
              heart.innerHTML = EMPTY_HEART   // <<= all clicked hearts should turn empty (outline)
              heart.className = "like-glyph"
            }
          })
          .catch(error => {
            // modal.hidden = false
            modal.removeAttribute("class")
            let modalMessage = document.getElementById("modal-message")
            modalMessage.innerText = error
            setTimeout(() => {
              // modal.hidden = true
              modal.setAttribute("class", "hidden")
            }, 5000)
          })

          

      })    // closes the heart event listener



  }   // closes the for-of hearts statement

  


  // STEP 5
  // NOTE Change the clicked heart:
      // if empty =>> make full & red, else =>> make empty



  // STEP 6
  // NOTE 

    // function hideModal() {
    //   modal.hidden = true
    // }
    // .catch(() => {
    //   modal.hidden = false
    //   let modalMessage = document.getElementById("modal-message")
    //   modalMessage.innerText = "The house is on fire!!"
    // })



})


// NOTE Is the Promise below a keyword?


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
