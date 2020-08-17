
const hamburgerIcon = document.querySelector('.hamburger-icon')
const closeIcon = document.querySelector('.close-icon')

const nav = document.querySelector('.main-nav')


    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
        nav.classList.add('show')
       
       
    })

    closeIcon.addEventListener('click', () => {
        hamburgerIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
        nav.classList.remove('hide')
        nav.classList.remove('show')
    })
