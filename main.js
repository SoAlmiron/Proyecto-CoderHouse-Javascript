//--GLOBAL VARIABLES
const user = "moderator";
const password = "1234";
let cant = 0;
let ticket = 0;
let ticketFinal = 0;


alert("Bienvenido/a");
login();
buyClothes();
shipping (ticket);

//--FUNCTIONS
function login (){
    let name = prompt ("Ingrese con un usuario o de manera anonima:");
    if (name === user){
        let pass = prompt ("Tiene 3 intentos. Ingrese la contraseña:");
        let flag = true;
        var i = 2;
        while (flag){
            if (pass === password){
                alert ("A iniciado sesion correctamente.");
                flag = false;
            } else if (i > 0){
                pass = prompt ("Ingrese la contraseña nuevamente, le quedan " + i + " intentos.");
                i--;
            } else if (i == 0){
                alert ("La cuenta se ha bloqueado.");
                flag = false;
            }
        }
    } else {
        alert ("A ingresado de manera anonima, las funciones en esta pagina son limitadas.");
    }
}

function buyClothes() {
    let typeClothes;
    let priceClothes = 0;
    let continueBuy = true;

    while (continueBuy) {
        typeClothes = prompt ("¿Que tipo de prenda vas a comprar hoy? REMERA, JEAN, SHORT, CAMPERA");
        cant = prompt ("¿Cuantas vas a llevar?");
    
        switch (typeClothes){
            case "REMERA":
                priceClothes = 1500;
                break;
            case "JEAN":
                priceClothes = 5450;
                break;
            case "SHORT":
                priceClothes = 3700;
                break;
            case "CAMPERA":
                priceClothes = 10280;
                break;
            default: 
            alert ("Ingresa una opcion de producto valida.");
            cant = 0;
        }

        ticket += (priceClothes * cant);

        alert ("Tu compra actual es de: $" + ticket);

        continueBuy = confirm("¿Deseas seguir comprando?");
    }

    alert ("Tu compra final sin envio es de: $" + ticket);
} 

function shipping (ticket) {
    while (ticket !== 0){
        if (ticket >= 15000){
            ticketFinal = ticket;
            alert ("Tienes envio gratis a todo el pais por tu compra mayor a $15000. Tu compra final es de: $" + ticketFinal);
        } else {
            ticketFinal = (ticket + 1500);
            alert ("El costo del envío es de $1500. Tu compra final es de: $" + ticketFinal);
        }
    }
}