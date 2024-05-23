import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(precio, descripcion, nombre, imagen) {
    const video = document.createElement("li");
    video.className = "videos__item";

    video.innerHTML = `<img width="20%" height="80%" src="${imagen}" style="border-radius: 10px;"></img>
        <div class="descripcion-video" style="display: flex; justify-content: space-evenly; ">
            <h3>${nombre}</h3>  <br>  
            <p style="font-weight: bold">$${precio}</p>
        </div>
        <div style="margin: 5px 0px">
        <p  style="display: block; text-align: center;  padding: 0px 0%; color: green; margin-top: 10px">${descripcion}</p>
        </div>`
    

    return video;
    
}


async function listaProductos() {
    try{
        const listaAPI = await conectaAPI.listaProductos();
        listaAPI.forEach(element => lista
            .appendChild(construyeCard(element.precio, element.descripcion, element.nombre, element.imagen)));
    }catch{
        lista.innerHTML=`<h2 class="mensaje__titulo">No fue posible cargar la lista de productos</h2>`;
    }
}

listaProductos();

