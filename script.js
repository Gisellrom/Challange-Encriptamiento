function encriptar(){
    let texto = document.getElementById("cajaTexto").value;
    let tituloMensaje = document.getElementById("tituloNoEncontrado");
    let parrafo = document.getElementById("parrafo");
    let imgChico = document.getElementById("chico");
    
    var regex = /^[a-z]+$/;

    // Verificar si el texto coincide con la expresión regular
    if (regex.test(texto)) {
        let textoCifrado = texto
        .replace(/e/gi,"enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
        
        if (texto.length != 0) {
            document.getElementById("textoEncriptado").value = textoCifrado;
            imgChico.src = "./img/textoEncriptado.png";
            tituloMensaje.textContent = "Texto encriptado con éxito";
            parrafo.textContent = "";    
        } else {
            document.getElementById("textoEncriptado").value = "";
            imgChico.src = "./img/chico.png";
            tituloMensaje.textContent = "Ningún mensaje fue encontrado";
            parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
            //Swal.fire("Opps!", "Debes ingresar un texto", "warning");
        }
    } else {
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        document.getElementById("cajaTexto").value = "";
    }
}

function desencriptar(){
    let texto = document.getElementById("cajaTexto").value;
    let tituloMensaje = document.getElementById("tituloNoEncontrado");
    let parrafo = document.getElementById("parrafo");
    let imgChico = document.getElementById("chico");
    
    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    
    if (texto.length != 0) {
        document.getElementById("textoEncriptado").value = textoCifrado;
        imgChico.src = "./img/desencriptar.png";
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
    } else {
        document.getElementById("textoEncriptado").value = textoCifrado;
        imgChico.src = "./img/chico.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        //Swal.fire("Opps!", "Debes ingresar un texto", "warning");
        }
}

function copiar() {
    // Obtener el elemento que contiene el texto encriptado
    let copyText = document.getElementById("textoEncriptado");

    // Seleccionar el texto dentro del elemento
    copyText.select();

    try {
        // Intentar copiar el texto seleccionado al portapapeles
        document.execCommand("copy");
        // Borrar el contenido del elemento "cajaTexto"
        document.getElementById("cajaTexto").value = "";
        // Actualizar los elementos después de que se copie el texto
        actualizarElementos();
    } catch (err) {
        console.error("Error al intentar copiar el texto:", err);
    }
}

function actualizarElementos() {
    // Obtener elementos para actualizar
    let tituloMensaje = document.getElementById("tituloNoEncontrado");
    let parrafo = document.getElementById("parrafo");

    // Cambiar el texto del título y el párrafo
    tituloMensaje.textContent = "¡Texto Copiado con éxito!";
    parrafo.textContent = "El texto ha sido copiado al portapapeles.";
}