/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section");
let navBarList = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isInViewport(elem){
    let bound = elem.getBoundingClientRect();
    if (bound.top >= 0 && bound.left >= 0 && bound.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bound.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    {
        return true;
    } 
    else
    {
        return false;
    }
}
function pageHeight() {
    let height = document.getElementsByClassName("page__header")[0].getBoundingClientRect().height;
    return height;
}
function scrollPage(i) {
    let sections = document.getElementsByTagName("SECTION");
    let sectionHeight = sections[i].getBoundingClientRect();
    let topHeight = sectionHeight.top - pageHeight() + 1;
    window.scrollBy(0, topHeight);
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function createNavBar(){
    for (let i=0; i<sections.length; i++)
    {
        let list = document.createElement("LI");
        list.id = "list";
        list.setAttribute("data-nav",sections[i].id);
        let a = document.createElement("A");
        a.id = sections[i].id;
        a.textContent = " | " + sections[i].getAttribute("data-nav");
        list.appendChild(a);
        navBarList.appendChild(list);
    }
}
//Scroll Event Trigger to select the active section
window.addEventListener("scroll", mynavFunction);
//Function to set the class name of section and list items in ViewPort as Active
function mynavFunction(){
    const allSections = document.querySelectorAll("section");
    const allLinks = document.getElementsByTagName("li");
    for (i=0; i<allSections.length; i++)
    {
        if(!isInViewport(allSections[i]))
        {
            allSections[i].classList.remove("your-active-class");
            allLinks[i].classList.remove("active-link");
        }
        else
        {
            allSections[i].classList.add("your-active-class");
            allLinks[i].classList.add("active-link");
        }
    }
}
// Scroll to anchor ID using scrollTO event
//Added Event Listeners to each LI item created 
function scrollTo() {
    let nav = document.getElementsByTagName("LI");
    for (let i = 0; i < nav.length; i++) {
        nav[i].addEventListener("click", () => scrollPage(i));
    }
}
/**
 * End Main Functions
 * Begin Events
 * 
*/


// Build menu 
createNavBar();
// Scroll to section on link click
scrollTo();
// Set sections as active
mynavFunction;