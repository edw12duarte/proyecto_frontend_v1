let mapa = L.map("map",{
    minZoom: 0,
    maxZoom: 4,
    center:[350,300],
    zoom:0,
    crs: L.CRS.Simple,
});

let bounds = [[0,0],[700,700]]; 
let image_mapa = 'source-ER/map_ER.jpg';
L.imageOverlay(image_mapa,bounds).addTo(mapa);
mapa.fitBounds(bounds);



let content_titulo = document.getElementsByClassName('content_titulo')[0].querySelector('h1');
let content_text = document.getElementsByClassName('content_text')[0].querySelector('p');
let content_carrusel = document.getElementsByClassName('content_carrusel')[0].querySelectorAll('img');



//Esta funcion trae datos de un json (direccion_json).
function traer_datos_json(direccion_json){
    return new Promise ((resolve, reject)=>{

        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',direccion_json, true);
        xhttp.send();

        xhttp.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                let datos = JSON.parse(this.responseText);
                resolve(datos);
            }
        }
    });
}

//  CREA POLIGONOS Y TODAS SUS FUNCIONES
// input: direccion del archivo json que tiene los datos de los poligonos
traer_datos_json('json/zonas.json').then(zonas=>{
    let zonas_p =[];

    //se llena un array de los polygons en el mapa (zonas_p)
    zonas.forEach((item)=> {
        let poligono =L.polygon(item.coord_zonas,{color:'transparent'}).addTo(mapa);
        zonas_p.push(poligono);
    });

    zonas_p.forEach((poligono, index)=>{
        //con el array de poligonos(zonas_p) se implenta la funcion de auto zoom a cada poligono
        // y el cambio de nombre en el titulo
        poligono.on('click', ()=>{                                 // ---> .on() == addEventListener()
            mapa.flyToBounds(poligono.getBounds(),{duration: 0.7 });

            //se cambia el titulo, descripcion y carrusel de la zona
            content_titulo.innerText = zonas[index].nombre_zona;
            content_text.innerText = zonas[index].descripciones_zonas;

            content_carrusel[0].src = "source-ER/img_carrusel_map/"+zonas[index].imagenes_carrusel+"/img_1.jpg";
            content_carrusel[1].src = "source-ER/img_carrusel_map/"+zonas[index].imagenes_carrusel+"/img_2.jpg"
            content_carrusel[2].src = "source-ER/img_carrusel_map/"+zonas[index].imagenes_carrusel+"/img_3.jpg"
            content_carrusel[3].src = "source-ER/img_carrusel_map/"+zonas[index].imagenes_carrusel+"/img_1.jpg"
        });

        // con el array de poligonos(zona_p) se muestra el nombre de esa zona (hover)
        poligono.bindTooltip(zonas[index].nombre_zona,{className :'my_tooltip'});
    });
});


//  CREA LOS ICONOS Y TODAS SUS FUNCIONES
// input: direccion del archivo json que tiene los datos de los iconos
traer_datos_json('json/posicion_jefes.json').then(posicion=>{

    let icono= 'source-ER/iconos/jefes/indicador_jefe.png';
    let indicador_jefe = L.icon({
        iconUrl: icono,
        iconSize: [32, 32],
        iconAnchor: [32, 32]
    });
    let todos_iconos_jefes =[];

    posicion.forEach((item)=>{
        let icono_jefe = L.marker(item.coord_jefes, {icon: indicador_jefe}).addTo(mapa);
        todos_iconos_jefes.push(icono_jefe);
    });

    todos_iconos_jefes.forEach((icono, index)=>{
        icono.bindTooltip(posicion[index].nombre_boss,{className :'my_tooltip_jefe'});
    });
});



















































/*
let zona1 =[[0,150],[0,300],[220,320],[220,150]];
let zona2 =[[130,320],[130,470],[320,470],[270,320]];
let zona3 =[[225,0],[225,200],[390,200],[500,0],];
let zona4 =[[470,70],[450,95],[432,130],[510,180],[535,125],[530,70]];
let zona5 =[[432,131],[420,150],[400,320],[535,320],[535,200]];
let zona6 =[[460,320],[460,520],[600,520],[600,320]];
let zona7 =[[600,350],[600,450],[680,450],[680,350]];
let zona8 =[[330,600],[330,660],[380,660],[380,600]];





let zonas =[zona1,zona2,zona3,zona4,zona5,zona6,zona7,zona8];
let zonas_p =[];

zonas.forEach((item)=> {
    zonas_p.push(L.polygon(item,{color:'black'}).addTo(mapa));
});


zonas_p.forEach((item)=>{
    item.on('click', ()=>{
        mapa.flyToBounds(item.getBounds(),{duration: 1 });
    });

    item.bindTooltip("Texto del tooltip",{className :'my_tooltip'});
});


coord_jefe1=[205,180];
coord_jefe2=[320,80];
coord_jefe3=[130,425];
coord_jefe4=[493,105];
coord_jefe5=[470,240];
coord_jefe6=[430,280];
coord_jefe7=[475,450];
coord_jefe8=[360,650];
coord_jefe9=[650,390];
coord_jefe10=[430,293];
coord_jefe11=[420,300];
coord_jefe12=[255,80];

let indicador_jefe = L.icon({
    iconUrl: '../source-ER/iconos/jefes/indicador_jefe.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32]
});


let marker_jefe = L.marker(coord_jefe12, {icon: indicador_jefe}).addTo(mapa);
marker_jefe.bindTooltip('renala',{className :'my_tooltip_jefe'});
*/