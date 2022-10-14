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

// SELECTION CATALOGUE TAB
const tabs = document.querySelectorAll(".nav-tab div")
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		tabs.forEach((tab)=>{
			tab.classList.remove("active")
		})
		tab.classList.add("active")
	})
})
console.log(tabs)