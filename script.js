const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
   e.preventDefault();
   CTA.classList.toggle("hide");
   CTA.classList.toggle("hide");
}

CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", fucntion() {console.log("The button was clicked!");}, false);

// Loops

var extLinks = document.querySelectorAll('a[href^="http"]');

for ( var i = 0; i < extLinks.length; i ++ ) {
  if ( !extLinks[i].hasAttribute("target")) {
      extLinks[i].setAttribute("target","_blank");
  }
}
