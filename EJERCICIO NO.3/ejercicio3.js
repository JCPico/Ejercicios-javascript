
function listar(){
    var newString = "";
    var nombre = document.getElementById("nombre").value;
    var espacio =0;
    for (var i = 0;i <= nombre.length-1; i++) {          
        if (nombre[i] == ' '){
            newString += '-';
        } else
        {        
        newString += nombre[i] + '-'; 
        }
    }

document.write( newString.substr(0,newString.length-1 ) );
console.log( newString.substr(0,newString.length-1 )  );

}