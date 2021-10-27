
function listar(){
    var newString = "";
    var nombre = document.getElementById("nombre").value;
    var espacio =0;
    for (var i = nombre.length - 1; i >= 0; i--) { 
        newString += nombre[i];  
        if (nombre[i] == ' '){
           espacio = espacio+1;
        }     
    }
var letras = nombre.length - espacio
document.write('Tu palabra al revés es: ' + newString + ' Tiene '+  letras + ' letras ' + espacio + ' espacios'  );
console.log('Tu palabra al revés es: ' + newString + ' Tiene '+  letras + ' letras ' + espacio + ' espacios'  );

}