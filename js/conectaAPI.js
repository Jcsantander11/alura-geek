async function listaProductos(){
    const conexion = await fetch("http://localhost:3001/videos",{
        method:"GET",
        headers:{
        "Content-type":"application/json"
        }
    });
    
    const conexionConvertida=await conexion.json();
    return conexionConvertida;
}

async function crearProducto(precio,descripcion,nombre,imagen){
    const conexion= await fetch("http://localhost:3001/videos",{
    method:"POST",
    headers:{
        "Content-type":"application/json"
    },
    body:JSON.stringify({
        precio:precio,
        descripcion:descripcion,
        nombre:nombre,
        imagen:imagen
    })
    })
    if(!conexion.ok){
        throw new Error("No fue posible subir el producto");
    }
    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

export const conectaAPI={
    listaProductos,crearProducto
}
