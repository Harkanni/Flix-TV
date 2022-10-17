// SEARCH BAR TOGGLING
const searchIcon = document.querySelector(".utilities .fa")
const searchModal = document.querySelector(".form-search")
const closeModal = document.querySelector(".fa-window-close")
searchIcon.addEventListener("click", () => {
    searchModal.classList.add('active')
})
closeModal.addEventListener("click", () => {
	searchModal.classList.remove('active')
})
searchModal.hasOwnProperty("active")

// SIDEBAR TOGGLE
const menuOpen = document.querySelector(".menu-bar")
const menuClose = document.querySelector(".sideBar-container .fa-window-close")

menuOpen.addEventListener("click", () => {
  var sideBar = document.querySelector(".sideBar-container")
  sideBar.classList.add("active")
})
menuClose.addEventListener("click", () => {
  var sideBar = document.querySelector(".sideBar-container")
  sideBar.classList.remove("active")
})

// HEADER POSITION FIXING ON SMALLER SCREEN
var bodyWidth = document.documentElement.offsetWidth;
var htmlEle = document.documentElement
var navEle = document.querySelector('header')
var navHeight = navEle.offsetHeight
var style = document.createElement("Style");
if (bodyWidth <= 480 ) {
	style.innerHTML = ` .movie-container {
        margin-top: ${navHeight}px;
    }`
	htmlEle.appendChild(style)
}
if (bodyWidth >= 481 ) {
	style.innerHTML = ` .movie-container {
        margin-top: 0px;
    }`
}

