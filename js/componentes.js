class headermenu extends HTMLElement{
    constructor(){
        super();
    }

    /* PARA QUE FUNCIONE: 
    SE DEBE COLOCAR LO QUE ESTA DENTRO DEl  div, header, section,etc  
    QUE SE QUIERE  VOLVER  'componente' DE JS */


    connectedCallback(){
        this.innerHTML = `

        <style>
        header {
            width: 100%;
            height: 90px;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-between;
            background-color: rgb(17, 18, 17, 0.4);
            border-bottom: 10px solid transparent;
            border-image: url('../source-ER/others_backgrounds/separation.png') 40 round ;
            z-index: 100;
        }
        
        header .titulo{
            height: 100%;
            width: auto;
            display:flex;
            flex-direction: column;
            align-items: center;
            padding: 0;
            margin-left: 10%;
        }
        
        header .titulo h1{
            color: rgb(243, 240, 185);
            font-size: 40px;
            font-family: "Metropolis","Gotham",Gotham,"Helvetica Neue",Helvetica,Arial,sans-serif;
            font-weight: 800;
            margin: 0;
        }
        
        header .titulo h6{
            color: rgb(243, 240, 185);
            font-size: 10px;
            font-family: "Metropolis","Gotham",Gotham,"Helvetica Neue",Helvetica,Arial,sans-serif;
            margin: 0;
        }
        
        header #menu_nav{
            height: 80%;
            width: 50%;
            margin-right: 5%;
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        
        header #menu_nav ul{
            width: 90%;
            height: 100%;
            display: inline-flex;
            list-style: none;
            text-decoration: none;
            justify-content: space-around;
        }
        
        header #menu_nav ul li{
            margin: 0;
            width: 200px;
            height: 100%;
            display: flex;
            border-radius:50px ;
            transition: all 5s;
        }
        
        header #menu_nav ul li:hover {
            border: 1px solid transparent;
            border-radius: 50px;
            box-shadow: 20px 20px 20px inset rgb(0, 0, 0);
            text-shadow: 10px 10px 5px rgb(0, 0, 0);
            transition: all 0.5s;
        }
        
        header #menu_nav ul li a{
            color: rgb(243, 240, 185);
            margin: auto;
            text-decoration: none;
            font-size: 20px;
            font-weight: 800;
            font-family: "Metropolis","Gotham",Gotham,"Helvetica Neue",Helvetica,Arial,sans-serif;
        }
        
        #menu_h {
            font-size: 50px;
            margin: 2%;
            color: white;
            display: none;
            cursor: pointer;
        }
        
        @media screen and (max-width: 1190px) {
            
            #menu_h{
                display: block;
            }
        
            header #menu_nav{
                position: fixed;
                height: 400px;
                width: 100%;
                top: 90px;
                left: 100%;
                background-color: rgba(130, 130, 130, 0.7);
                transition:  all 1s ;
            }
        
            header #menu_nav ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 0;
                margin: 3% 0;
            }
        
            header #menu_nav ul li{
                width: 100%;
                height: 100%;
                margin: 1% 0;
                transition: all 3s;
            }
        
            header #menu_nav ul li a{
                font-size: 40px;
            }
        
        }
        </style>



    <header>
        <div class='titulo'>
            <h1>Guia de Elden ring</h1>
            <h6>Desarrollador pagina: Edwin Duarte</h6>
        </div>
        <nav id="menu_nav">
            <ul>
                <li class="info" >
                    <a href="index_principal.html">Inicio</a>
                </li>
                <li class="jefes">
                    <a href="jefes_y_lore.html">Jefes y Lore</a>
                </li>
                <li class="mapa">
                    <a href="mapa.html">Mapa</a>
                </li>
                <li class="contact">
                    <a href="index_principal.html\#footer">Contacto</a>
                </li>
            </ul>
        </nav>
        <i class="fa-solid fa-bars" id="menu_h"></i>
    </header>
    <script src="desplegable.js"></script>

        `;
    }
}

window.customElements.define("header-menu", headermenu);