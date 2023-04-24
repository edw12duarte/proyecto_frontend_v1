
let menu_nav = document.getElementById('menu_nav');

document.getElementById('menu_h').addEventListener('click', ()=>{

    (menu_nav.style.left === '100%') ? menu_nav.style.left = '0%' : menu_nav.style.left = '100%' ;

});
