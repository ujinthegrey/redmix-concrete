// ---DHEADER  ROPDOWN -------------
const menuIcon = document.querySelector('.menu__icon')
const dropdown = document.querySelector('.dropdown')

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault()
        menuIcon.classList.toggle('_active')
        dropdown.classList.toggle('_active')        
    })
}

// ---SMOOTH ANCHOR SCROOL-------------
const anchors = document.querySelectorAll('a[href*="#"]')
if (anchors.length) {
    for (let anchor of anchors) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault()
                menuIcon.classList.remove('_active')
                dropdown.classList.remove('_active')  
                
                const blockToScroll = document.getElementById(anchor.getAttribute('href').substr(1))
                
                if (blockToScroll) {
                    blockToScroll.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }
            })
        }
    }

//----FORM SUBMIT -------------
const form = document.getElementById('footerForm')
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault()
        const submitButton = document.querySelector('.form__btn')
        if (submitButton) {
            submitButton.innerHTML = 'Форма отправлена!'
        }
    })
}