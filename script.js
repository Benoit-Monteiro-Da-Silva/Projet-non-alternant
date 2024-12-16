const body = document.querySelector("body")
const searchModal = document.querySelector(".search-modal")
const connexionModal = document.querySelector(".connexion-modal")
const searchButton = document.querySelector(".search-button")
const connexionButton = document.querySelector(".connexion-button")
const closeConnexionModalButton = document.querySelector("#close-connexion-modal-button")
const closeSearchModalButton = document.querySelector("#close-search-modal-button")
const filtersListContainer = document.querySelector('.filters-list-container')
const filtersList = document.querySelector('.filters-list')
const toggleFilters = document.querySelectorAll('.toggle-filter')
const arrowButtons = document.querySelectorAll('.arrow-button')
const articleButtons = document.querySelectorAll('.article-button')

const searchModalToggle = (e) => {
    e.preventDefault()
    if (window.innerWidth < 768) {
        searchModal.classList.toggle('open')
        body.classList.toggle('modal-opened')
    }
}

const connexionModalToggle = () => {
    connexionModal.classList.toggle('open')
    if (window.innerWidth < 768) {
        body.classList.toggle('modal-opened')
    } else {
        connexionButton.classList.toggle('modal-opened')
    }
}

const toggleFilter = (e) => {
    toggleFilters.forEach((button) => {
        button.classList.remove('button-active')
    })
    e.currentTarget.classList.add('button-active')
}

const filtersScrollLeft = () => {
    filtersList.scrollTo({
        left: filtersList.scrollLeft - 300,
        behavior: 'smooth'
    })
    if (filtersList.scrollLeft - 300 < 50) {
        filtersListContainer.style.setProperty('--before-display', 'none')
    }
    if (filtersList.scrollWidth - filtersList.clientWidth > 50) {
        filtersListContainer.style.setProperty('--after-display', 'block')
    }
}

const filtersScrollRight = () => {
    filtersList.scrollTo({
        left: filtersList.scrollLeft + 300,
        behavior: 'smooth'
    })
    if (filtersList.scrollLeft + 300 > filtersList.scrollWidth - filtersList.clientWidth - 50) {
        filtersListContainer.style.setProperty('--after-display', 'none')
    }
    if (filtersList.scrollWidth - filtersList.clientWidth > 50) {
        filtersListContainer.style.setProperty('--before-display', 'block')
    }
}

const toggleButton = (e) => {
    articleButtons.forEach((button) => {
        button.classList.remove('button-active')
    })
    e.currentTarget.classList.add('button-active')
}

if (toggleFilters) {toggleFilters.forEach(button => button.addEventListener("click", toggleFilter))}
if (connexionButton) {connexionButton.addEventListener("click", connexionModalToggle)}
if (searchButton) {searchButton.addEventListener("click", searchModalToggle)}
if (closeSearchModalButton) {closeSearchModalButton.addEventListener("click", searchModalToggle)}
if (closeConnexionModalButton) {closeConnexionModalButton.addEventListener("click", connexionModalToggle)}
if (arrowButtons[0]) {arrowButtons[0].addEventListener("click", filtersScrollLeft)}
if (arrowButtons[1]) {arrowButtons[1].addEventListener("click", filtersScrollRight)}
if (articleButtons) {articleButtons.forEach(button => button.addEventListener("click", toggleButton))}