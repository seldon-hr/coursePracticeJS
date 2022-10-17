const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu() {
    /* Here instead to use the method 'add' in classList aspect we used the toggle, this makes
    a interchangeable about add and remove class */
    desktopMenu.classList.toggle('inactive')
   
}