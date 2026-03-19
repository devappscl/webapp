function manipular() {
    // Seleccionamos el objeto por su ID
    const parrafo = document.getElementById("texto-intro");
    const titulo = document.getElementById("titulo");
    //Cambiamos el contenido del objeto
    parrafo.innerHTML = "¡El DOM ha sido modificado con éxito!";
    titulo.innerHTML = "Hola Mundo";
}