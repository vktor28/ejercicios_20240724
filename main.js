// objetos JS Son conjuntos de datos agrupados en pares clave-valor

//array frutas:
let frutas = ["manzana", "pera", "naranja", "kiwi", "platano"];

//objeto de frutas con los precios
let frutasPrecios = {"manzana": 2.20, "pera": 1.90, "naranja": 2.10, "kiwi": 3.40, "platano": 2.25}

console.log("frutas ARRAY");
console.log(frutas);
console.log("frutas Precios");
console.log(frutasPrecios);


let id= parseInt(prompt("¿qué id quieres ver=?"));
//let urlRM = "https://rickandmortyapi.com/api/character/" +id; 

//template literal
let urlRM = `https://rickandmortyapi.com/api/character/${id}`;

fetch(urlRM)
.then((response) => response.json())
.then((data) => {

let nombre = data.name;
let image = data.image;
let species = data.species;
let gender = data.gender;
let location = data.location.name;
let status = data.status;
document.getElementById("nombre").innerHTML = nombre;
document.getElementById("imagen").src = image;
document.getElementById("especies").innerHTML = species;
document.getElementById("gender").innerHTML = gender;
document.getElementById("location").innerHTML = location;
document.getElementById("status").innerHTML = status;
document.getElementById("extra2").innerHTML = `<img src=${data.image} style="width:500px">`;
if(status === "Dead"){document.getElementById("status").style.backgroundColor = "red";} else {document.getElementById("status").style.backgroundColor = "green";}
let todosValores = Object.values(data);
console.log(todosValores);

})