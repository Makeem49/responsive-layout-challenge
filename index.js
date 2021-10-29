const hamburger = document.querySelector(".ham")
const links = document.querySelector('#nav_link')

hamburger.addEventListener('click', event => {
  links.classList.toggle('nav-visible')  
})
