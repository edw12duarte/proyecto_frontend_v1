
names_boss = ['Godrick, el Injertado',
'Rennala, Reina de la Luna Llena',
'Radhan, Azote de las Estrellas',
'Rykard, Señor de la Blasfemia',
'Morgott, Rey de los Augurios',
'Mogh, Señor de la Sangre',
'Gigante de Fuego',
'Maliketh, la Hoja Negra',
'Malenia, la Espada de Miquella',
'Godfrey Primer Señor del Círculo / Hoarah Loux',
'Radagon de la Orden Dorada / Bestia del círculo',
'Ranni, princesa de la luna'];

//variables para cambiar imagenes
let  imagen_boss= document.querySelector(".imagen_boss");
let links = document.querySelectorAll(".link");

//variables para cambiar estadisticas
let statistics = document.getElementsByClassName('statistics')[0];
let statistics_name_boss = statistics.querySelector('h1');
let parrafos_statistics = statistics.querySelectorAll('p');

//variables para cambiar historia
let historia = document.getElementsByClassName('historia')[0];
let parrafos_historia = historia.querySelector('p');


links.forEach((item,index)=>{
    //Cambia la imagen principal del jefe en la pestaña jefes y lore 
    item.addEventListener('click',()=>{
        let imagen_item = item.querySelector('img');
        imagen_boss.src = imagen_item.src;

        //Cambia el nombre del jefe en la pestaña jefes y lore
        statistics_name_boss.innerText = (names_boss[index]);

        //Cambia las estadisticas e historia del jefe en la pestaña jefes y lore
        cambiar_datos(index);
    })
} )


function cambiar_datos(index){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','../json/datos_jefes_listos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);

            parrafos_statistics[0].innerHTML = '<p>'+datos[index].locacion +'</p>';
            parrafos_statistics[1].innerHTML = '<p>'+datos[index].vida +'</p>';
            parrafos_statistics[2].innerHTML = '<p>'+datos[index].drop +'</p>';
            parrafos_statistics[3].innerHTML = '<p>'+datos[index].resistencia +'</p>';
            parrafos_statistics[4].innerHTML = '<p>'+datos[index].debilidad +'</p>';

            parrafos_historia.innerHTML = '<p>'+datos[index].historia +'</p>';

        }
    }
}





