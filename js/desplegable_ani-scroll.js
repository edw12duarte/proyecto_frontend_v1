
/* Menu Hamburguesa responsive */
let menu_nav = document.getElementById('menu_nav');

document.getElementById('menu_h').addEventListener('click', ()=>{
    (menu_nav.style.top === '-900px') ? menu_nav.style.top = '90px' : menu_nav.style.top = '-900px' ;
});

/*Animaciones scroll */

window.sr = ScrollReveal();

/*Animaciones container_2 */
    sr.reveal('.container_logo', {
        duration : 3000,
        origin: 'top'
    });

/*Animaciones container_2 */
    sr.reveal('.img_1_c2', {
        duration : 2000,
        origin: 'left',
        distance: '-100px'
    });

    sr.reveal('.img_2_c2', {
        duration : 2000,
        origin: 'right',
        distance: '200px'
    });

    sr.reveal('.content video', {
        duration : 2000,
        origin: 'bottom',
        distance: '200px'
    });


/*Animaciones container_3 */
    sr.reveal('.mitad_1', {
        duration : 1200,
        origin: 'top',
        distance: '200px'
    });

    sr.reveal('.mitad_2', {
        duration : 1200,
        origin: 'bottom',
        distance: '200px'
    });


/*Animaciones container_4 */
    sr.reveal('.other_games', {
        duration : 1200,
        origin: 'top',
        distance: '200px'
    });

    sr.reveal('#container_4 h1', {
        duration : 1200,
        origin: 'top',
        distance: '200px'
    });

    sr.reveal('.requieriments', {
        duration : 1200,
        origin: 'bottom',
        distance: '200px'
    });

    sr.reveal('#container_4 h2', {
        duration : 1200,
        origin: 'bottom',
        distance: '200px'
    });

    /*Animaciones jefes */
    sr.reveal('.imagen_boss', {
        duration : 1200,
        origin: 'bottom',
        distance: '200px'
    });