const body = document.querySelector("body")
const searchModal = document.querySelector(".search-modal")
const connexionModal = document.querySelector(".connexion-modal")
const searchButton = document.querySelector(".search-button")
const connexionButton = document.querySelector(".connexion-button")
const closeConnexionModalButton = document.querySelector("#close-connexion-modal-button")
const closeSearchModalButton = document.querySelector("#close-search-modal-button")
const filtersListContainer = document.querySelector('.filters-list-container')
const filtersList = document.querySelector('.filters-list')
const filters = document.querySelectorAll('.filters-list button')
const arrowButtons = document.querySelectorAll('.arrow-button')

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

const filterToggle = (e) => {
    filters.forEach((button) => {
        if (button.classList.contains('filter-active')) {
            button.classList.remove('filter-active')
        }
    })
    e.target.classList.add('filter-active')
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

connexionButton.addEventListener("click", connexionModalToggle)
searchButton.addEventListener("click", searchModalToggle)
closeSearchModalButton.addEventListener("click", searchModalToggle)
closeConnexionModalButton.addEventListener("click", connexionModalToggle)

filters.forEach(filter => filter.addEventListener("click", filterToggle))
arrowButtons[0].addEventListener("click", filtersScrollLeft)
arrowButtons[1].addEventListener("click", filtersScrollRight)