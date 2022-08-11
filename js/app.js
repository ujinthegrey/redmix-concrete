// ---HEADER  DROPDOWN -------------
const menuIcon = document.querySelector('.menu__icon')
const dropdown = document.querySelector('.dropdown')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')

if (menuIcon) {
    menuIcon.addEventListener('click', (e) => {
        e.preventDefault()
        menuIcon.classList.toggle('_active')
        dropdown.classList.toggle('_active')   
        
        if (menuIcon.classList.contains('_active')) {
            main.addEventListener('click', (e) => {
                menuIcon.classList.remove('_active')
                dropdown.classList.remove('_active')        
            })
            footer.addEventListener('click', (e) => {
                menuIcon.classList.remove('_active')
                dropdown.classList.remove('_active')        
            })
        }
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
        const unsetForm = () => {
            const formInputs = document.querySelectorAll('.form__input')
            if (formInputs.length) {
                for (let formInput of formInputs) {
                    formInput.value = ''
                }
            }
            submitButton.innerHTML = 'Отправить'
        }

        setTimeout(unsetForm, 1500)
    })
}