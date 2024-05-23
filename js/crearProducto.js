import { conectaAPI } from "./conectaAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones

async function crearProducto(evento){
    evento.preventDefault();
    const imagen= document.querySelector("[data-imagen]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio=document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    try{
        await conectaAPI.crearProducto(precio,descripcion,nombre,imagen)
    
        alert("Producto subido correctamente")
    }catch(e){
        alert(e);
    }
}

formulario,addEventListener("submit",evento=>crearProducto(evento));

