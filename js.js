function validarDni(inputDni){
    /*
    *   Fucion para validar el DNI.
    *   Con sus atributos letrasValidas, dniPatron, str.   
    */

    var letrasValidas = 'TRWAGMYFPDXBNJZSQVHLCKET';
    var dniPatron = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]{1}$/i;
    var str = inputDni.toString().toUpperCase();

    /* Comprueba que hay un DNI */
    if (!dniPatron.test(str)) return false;

    var dni = str
    var letra = str.substr(-1);
    var posicionLetras = parseInt(dni.substr(0, 8)) % 23;

    /* ES la comprobacion de la letra para cada numero de DNI */
    if (letrasValidas.charAt(posicionLetras) === letra) return true;

    return false;
}


var app = angular.module("alumnes", []);
app.controller("AlumnoController", 
function ($scope) {
    $scope.alumnes = [];
    $scope.Insertar=function(){
        //Validación DNI
        if (validarDni($scope.noualumne.dni)){
            //Insertar datos en la tabla
            $scope.alumnes.push({
                dni: $scope.noualumne.dni,
                nombre: $scope.noualumne.nom, 
                apellido1: $scope.noualumne.cognom1, 
                apellido2: $scope.noualumne.cognom2, 
                email: $scope.noualumne.email, 
                nota: $scope.noualumne.nota
            });
            //Reiniciar formulario
            $scope.noualumne = null;
            //Notificación de inserción exitosa
            alert ("Alumne afegit.");
        }else{
            //Notificación de inserción fallida
            alert("El DNI introduït no existeix.");
        }
        //Borrar un registro
        $scope.eliminar = function(i){
            $scope.alumnes.splice(i, 1);
        }
    }
    
    
});

