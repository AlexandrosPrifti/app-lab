const accordionTitles = document.querySelectorAll('[data-accordion] .accordion-title')

accordionTitles.forEach(el => el.addEventListener('click', () => {
    el.parentElement.classList.toggle('show')
}))