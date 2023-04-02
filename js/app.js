const burger = document.getElementById('burger')
const linkList = document.getElementById('link_list')

function togglemenu() {

    linkList.classList.toggle('link_list_visible')

    burger.classList.toggle('cross')

    burger.addEventListener('click', togglemenu)
}

burger.addEventListener('click', togglemenu)
