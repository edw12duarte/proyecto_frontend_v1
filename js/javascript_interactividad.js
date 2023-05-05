
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


let  imagen_boss= document.querySelector(".imagen_boss");
let links = document.querySelectorAll(".link")

let statistics_name_boss = document.querySelector('.statistics').querySelector('h1')
let parrafos = document.querySelectorAll('p');


function cambiar_datos(index){
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','datos_jefes_listos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){

            let datos = JSON.parse(this.responseText);

            parrafos[0].innerHTML = '<p>'+datos[index].c +'</p>';
            parrafos[1].innerHTML = '<p>'+datos[index].e +'</p>';
            parrafos[2].innerHTML = '<p>'+datos[index].d +'</p>';
            parrafos[3].innerHTML = '<p>'+datos[index].h +'</p>';
            parrafos[4].innerHTML = '<p>'+datos[index].i +'</p>';
            parrafos[5].innerHTML = '<p>'+datos[index].historia +'</p>';

        }
    }
}



links.forEach((item,index)=>{
    //Cambia la imagen principal del jefe en la pestaña jefes y lore 
    item.addEventListener('click',()=>{
        let imagen_item = item.querySelector('img');
        imagen_boss.src = imagen_item.src;

        //Cambia el nombre del jefe en la pestaña jefes y lore
        statistics_name_boss.innerText = (names_boss[index]);

        //Cambia las estadisticas del jefe en la pestaña jefes y lore
        cambiar_datos(index);
    })
} )







