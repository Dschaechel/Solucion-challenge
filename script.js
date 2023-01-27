const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value ="";
    mensaje.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let cadena="";
    stringEncriptada = stringEncriptada.toLowerCase();
       for (let aux = 0;aux < stringEncriptada.length;aux++) {
            let texto = stringEncriptada.substr(aux,1);
              if (texto=="o"){
                 cadena=cadena+"ober";
              }
              else if ((texto=="a")){
                cadena=cadena+"ai";
              }
              else if ((texto=="e")){
                cadena=cadena+"enter";
              }
              else if ((texto=="i")){
                cadena=cadena+"imes";
              }
              else if ((texto=="u")){
                cadena=cadena+"ufat";
              }
              else if ((texto=="í")||(texto=="ó")){
                  alert("Recuerde no utilizar acentos");
                  cadena="";
                  break;
              }
              else if ((texto=="á")||(texto=="é")){
                alert("Recuerde no utilizar acentos");
                cadena="";
                break;
            }
              else{
                 cadena=cadena+texto;
              } 
         }
    return cadena;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value ="";
}

function desencriptar(stringDesencriptada) {
    let cadena="";
    stringDesencriptada = stringDesencriptada.toLowerCase();
       for (let aux = 0;aux < stringDesencriptada.length;aux++) {
            let texto = stringDesencriptada.substr(aux,1);
              if (texto=="o"){
                 cadena=cadena+"o";
                 aux=aux+3;
              }
              else if ((texto=="a")){
                cadena=cadena+"a";
                aux=aux+1;
              }
              else if ((texto=="e")){
                cadena=cadena+"e";
                aux=aux+4;
              }
              else if ((texto=="i")){
                cadena=cadena+"i";
                aux=aux+3;
              }
              else if ((texto=="u")){
                cadena=cadena+"u";
                aux=aux+3;
              } 
              else{
                 cadena=cadena+texto;
              } 
         }
    return cadena;
}

function copiarAlPortapapeles(){
  var input = document.querySelector('.mensaje').value;
  navigator.clipboard.writeText(input); 
}