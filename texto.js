función encriptar() {
    const inputText = documento. getElementById("inputText"). valor;
    const outputText = documento. getElementById("outputText");
    const encriptedText = encriptarTexto(inputText);
    outputText. valor = encryptedText;
}

function desencriptar() {
    const inputText = documento. getElementById("inputText"). valor;
    const outputText = documento. getElementById("outputText");
    const desencriptedText = desencriptarTexto(inputText);
    outputText. valor = desencriptedText;
}

function encriptarTexto(texto) {
    let textoEncriptado = texto;
    textoEncriptado = textoEncriptado.  replace(/e/g, "enter");
    textoEncriptado = textoEncriptado.  replace(/i/g, "imes");
    textoEncriptado = textoEncriptado.  replace(/a/g, "ai");
    textoEncriptado = textoEncriptado.  replace(/o/g, "ober");
    textoEncriptado = textoEncriptado.  reemplazar(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
    let texto = textoEncriptado ;
     texto = texto. replace(/enter/g, "e");
     texto = texto. replace(/imes/g, "i");
     texto = texto. replace(/ai/g, "a");
     texto = texto. replace(/ober/g, "o");
     texto = texto. replace(/ufat/g, "u");
    Devolver texto;
}
Pie de página
© 2023 GitHub, Inc.
Navegación de pie de página
Letra chica
Privacidad
Seguridad
Estado
Docs
Póngase en contacto con GitHub
Precios
API
Adiestramiento
Blog
Acerca de
