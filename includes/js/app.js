 let nombre = prompt('Escribe tu nombre de pila');
 let apelldioP = prompt('Escribe tu apellido paterno');
 let nombreJugador = nombre + ' ' + apelldioP;
 alert("Hola " + nombreJugador);
 alert("Vamos a hacer una pequeña suma en esta aplicacion, elige dos numeros de tu eleccion");
 let numero1 = Number(prompt("Escribe el primer numero"));
 let numero2 = Number(prompt("Escribe el Segundo numero"));
 alert("La respuesta a esa suma es.." + (numero1 + numero2));
 alert("Ahora responde lo que se te solicita");
 let pregunta1 = prompt("¿Quién ganaría un combate, Goku o Superman?").toLowerCase();
 let pregunta2 = prompt("¿Quién tiene más poder, Goku o Superman?").toLowerCase();
 let pregunta3 = prompt("¿A quién prefieres, Goku o Superman?").toLowerCase();
 let contadorSuperman = 0;
 let contadorGoku = 0
 if (pregunta1 === "superman") {
   contadorSuperman++;
 } else if (pregunta1 === "goku") {
   contadorGoku++;
 }
 if (pregunta2 === "superman") {
   contadorSuperman++;
 } else if (pregunta2 === "goku") {
   contadorGoku++;
 }
 if (pregunta3 === "superman") {
   contadorSuperman++;
 } else if (pregunta3 === "goku") {
   contadorGoku++;
 }
 let ganador;
 if (contadorGoku > contadorSuperman){
   alert("¡Felicidades! Eres fanático de Goku");
   ganador = "Goku";
 }
 else if(contadorGoku < contadorSuperman){
   alert("¡Felicidades! Eres fanático de Superman");
   ganador = "Superman";
 }
 let votosGanador = Math.max(contadorGoku, contadorSuperman);
 alert("Ganó " + ganador + " con " + votosGanador + " votos.");

let contador = 0;

while (contador < 10) {
  contador++;
  console.log("contando..." + " " + contador);
}









