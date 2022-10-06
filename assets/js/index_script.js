/*------------------------------------
  Counter
  
-------------------------------------- */
"use strict"

document.addEventListener("DOMContentLoaded", function() {
// You can change this class to specify which elements are going to behave as counters.
var elements = document.querySelectorAll(".scroll-counter")

elements.forEach(function(item) {
  // Add new attributes to the elements with the '.scroll-counter' HTML class
  item.counterAlreadyFired = false
  item.counterSpeed = item.getAttribute("data-counter-time") / 45
  item.counterTarget = +item.innerText
  item.counterCount = 0
  item.counterStep = item.counterTarget / item.counterSpeed

  item.updateCounter = function() {
    item.counterCount = item.counterCount + item.counterStep
    item.innerText = Math.ceil(item.counterCount)

    if (item.counterCount < item.counterTarget) {
      setTimeout(item.updateCounter, item.counterSpeed)
    } else {
      item.innerText = item.counterTarget
    }
  }
})

// Function to determine if an element is visible in the web page
var isElementVisible = function isElementVisible(el) {
  var scroll = window.scrollY || window.pageYOffset
  var boundsTop = el.getBoundingClientRect().top + scroll
  var viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  }
  var bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  }
  return (
    (bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom) ||
    (bounds.top <= viewport.bottom && bounds.top >= viewport.top)
  )
}

// Funciton that will get fired uppon scrolling
var handleScroll = function handleScroll() {
  elements.forEach(function(item, id) {
    if (true === item.counterAlreadyFired) return
    if (!isElementVisible(item)) return
    item.updateCounter()
    item.counterAlreadyFired = true
  })
}

// Fire the function on scroll
window.addEventListener("scroll", handleScroll)
})



    /*------------------------------------
    portfolio lightbox
-------------------------------------- */
const portfolioAll = GLightbox({
  selector: '.portfolio-all'
});
const portfolioBranding = GLightbox({
  selector: '.portfolio-branding'
});
const portfolioWebsite = GLightbox({
  selector: '.portfolio-website'
});
const portfolioIllustration = GLightbox({
  selector: '.portfolio-illustration '
});
/*------------------------------------
  Back to top button
-------------------------------------- */
const toTop = document.querySelector("#back-to-top");

window.addEventListener("scroll", () => {
 if (window.pageYOffset > 100) {
   toTop.classList.add("active");
 } else {
   toTop.classList.remove("active");
 }
})

 // navbar scroll active section 
 var sections = document.querySelectorAll("section");
 onscroll = function () {
   var scrollPosition = document.documentElement.scrollTop;
 
   sections.forEach((section) => {
     if (
       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
       scrollPosition <
         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
     ) {
       var currentId = section.attributes.id.value;
       removeAllActiveClasses();
       addActiveClass(currentId);
     }
   });
 };
 
 var removeAllActiveClasses = function () {
   document.querySelectorAll("nav a").forEach((el) => {
     el.classList.remove("active");
   });
 };
 
 var addActiveClass = function (id) {
   var selector = `nav a[href="#${id}"]`;
   document.querySelector(selector).classList.add("active");
 };
 
