//hero-section
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dotsContainer = document.querySelector(".dots-container");
    if (dotsContainer) {
      dotsContainer.innerHTML = ""; // Clear previous dots
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = "translateX(-" + slideIndex + "00%)";
        // Create a dot element for each slide
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.addEventListener("click", function() {
          slideIndex = i;
          showSlides();
        });
        dotsContainer.appendChild(dot);
      }
      // Add active class to the dot corresponding to the active slide
      let dots = document.querySelectorAll(".dot");
      dots[slideIndex].classList.add("active");
    }
  }

function nextSlide() {
 if(slideIndex!=8){
    slideIndex++;
    showSlides();
 }else{
    slideIndex=0;
    showSlides();
 }
}

function prevSlide() {
  if(slideIndex!=0){
    slideIndex--;
    showSlides();
  }else{
    slideIndex=8;
    showSlides();
  }
}


// const login= document.querySelector("#login");
// const signup=document.querySelector("#signup");
// const profile=document.querySelector("#profile");
// const wishlist=document.querySelector("#wishlist");
// const cart=document.querySelector("#cart");


// login.addEventListener("click",()=>{
//   signup.classList.add("hidden");
//   login.classList.add("hidden");
//   profile.classList.remove("hidden");
//   wishlist.classList.remove("hidden");
//   cart.classList.remove("hidden");
// })

// signup.addEventListener("click",()=>{
//   signup.classList.add("hidden");
//   login.classList.add("hidden");
//   profile.classList.remove("hidden");
//   wishlist.classList.remove("hidden");
//   cart.classList.remove("hidden");
// })

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");
let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let passwordEl = document.getElementById("password");
let passwordErrMsgEl = document.getElementById("passwordErrMsg");
let mbnoEl = document.getElementById("mbno");
let mbnoErrMsgEl = document.getElementById("mbnoErrMsg");
let cityEl = document.getElementById("city");
let cityErrMsgEl = document.getElementById("cityErrMsg");
let pincodeEl = document.getElementById("pincode");
let pincodeErrMsgEl = document.getElementById("pincodeErrMsg");
let stateEl = document.getElementById("state");
let stateErrMsgEl = document.getElementById("stateErrMsg");
let countryEl = document.getElementById("country");
let countryErrMsgEl = document.getElementById("countryErrMsg");
let loginEl = document.getElementById("login");


function fieldRequiredValidations(){

  nameEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      nameErrMsgEl.textContent = "Required*";
      nameErrMsgEl.classList.add("err-msg");
    }
    else{
      nameErrMsgEl.textContent = "";
      nameErrMsgEl.classList.remove("err-msg");
    }

  })

  emailEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      emailErrMsgEl.textContent = "Required*";
      emailErrMsgEl.classList.add("err-msg");
    }
    else{
      emailErrMsgEl.textContent = "";
      emailErrMsgEl.classList.remove("err-msg");
    }

  })


  passwordEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      passwordErrMsgEl.textContent = "Required*";
      passwordErrMsgEl.classList.add("err-msg");
    }
    else{
      passwordErrMsgEl.textContent = "";
      passwordErrMsgEl.classList.remove("err-msg");
    }

  })


  mbnoEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      mbnoErrMsgEl.textContent = "Required*";
      mbnoErrMsgEl.classList.add("err-msg");
    }
    else{
      mbnoErrMsgEl.textContent = "";
      mbnoErrMsgEl.classList.remove("err-msg");
    }

  })

  cityEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      cityErrMsgEl.textContent = "Required*";
      cityErrMsgEl.classList.add("err-msg");
    }
    else{
      cityErrMsgEl.textContent = "";
      cityErrMsgEl.classList.remove("err-msg");
    }

  })

  pincodeEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      pincodeErrMsgEl.textContent = "Required*";
      pincodeErrMsgEl.classList.add("err-msg");
    }
    else{
      pincodeErrMsgEl.textContent = "";
      pincodeErrMsgEl.classList.remove("err-msg");
    }

  })

  stateEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      stateErrMsgEl.textContent = "Required*";
      stateErrMsgEl.classList.add("err-msg");
    }
    else{
      stateErrMsgEl.textContent = "";
      stateErrMsgEl.classList.remove("err-msg");
    }

  })

  countryEl.addEventListener("blur",function(event){
    if(event.target.value === ""){
      countryErrMsgEl.textContent = "Required*";
      countryErrMsgEl.classList.add("err-msg");
    }
    else{
      countryErrMsgEl.textContent = "";
      countryErrMsgEl.classList.remove("err-msg");
    }

  })

}

fieldRequiredValidations();



