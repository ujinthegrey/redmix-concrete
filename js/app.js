const menuIcon = document.querySelector('.menu__icon')
const dropdown = document.querySelector('.dropdown')

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault()
        menuIcon.classList.toggle('_active')
        dropdown.classList.toggle('_active')
        
    })
}


/* --SMOOTH SCROOL --------------- */
const menuLinks = document.querySelectorAll('.menu__link[data-goto]')
if (menuLinks) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick)
    })

    function onMenuLinkClick(e) {
        const menuLink = e.target
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto)
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

            if (menuIcon.classList.contains('_active')) {
                menuIcon.classList.remove('_active')
                dropdown.classList.remove('_active')
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            })
            e.preventDefault()
        }
    }
}