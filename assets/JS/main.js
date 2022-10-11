// FORM MODAL TOGGLING
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