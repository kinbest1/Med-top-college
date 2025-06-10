
    let toggleElement= document.querySelector(".js-togglesBars")
    let toggleButton = document.querySelector(".js-open-button-div");


function showToggleBars(){
   toggleElement.classList.toggle("js-togglesBars");
}

 
  
let slidersElem = document.querySelector(".sliders")

let slidesElem = document.querySelectorAll(".slides img")




let slidIndex = 0;
let interval = null;


document.addEventListener("DOMContentLoaded", initialize());

// innitialize();

function initialize(){
  if( slidesElem.length > 0){
    slidesElem[slidIndex].classList.add ("showSingleImage")
    interval = setInterval(nextBtn,1000);
  };

  
}
 function show(index){

  if(index >= slidesElem.length){
    slidIndex = 0;
  } else if(index < 0){
    slidIndex = slidesElem.length-1;
  }
  slidesElem.forEach(singleSlide=>{singleSlide.classList.remove("showSingleImage")})
  slidesElem[slidIndex].classList.add ("showSingleImage")
 }

 function PrevBtn(){
  slidIndex--
  show(slidIndex)
 }

 function nextBtn(){
  slidIndex++;
 show(slidIndex)
 }







 
  

  