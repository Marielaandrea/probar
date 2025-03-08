
let contenedor_cotizacion = document.querySelector(".contenedor_cotizacion");

document.querySelector("#btn_cotizar").addEventListener("click",cotizar);

let container = document.querySelector(".contenedor_cotizacion");
let form = document.querySelector("#form_cotizador");

function cotizar(e){
    e.preventDefault();

let cliente= document.querySelector("#cliente").value;
let nroserie= document.querySelector("#nroserie").value;
let valor= document.querySelector("#valor").value;
let tipo= document.querySelector("#tipo").value;
    let cuota=0;
    if (!cliente||!nroserie||!valor){
        atert("ingresar todos los ");
    }if(tipo==="rotura"){
        cuota=valor*0.001;
           }else {
    cuota=valor*0.002;
   }

   container.innerHTML ="<p>"+cuota+"</p>";

form.classList.remove("robo");
form.classList.remove("rotura");
form.classList.add(tipo);
}


let consultas=[];

function agregar(){
let item = {"cliente": "Martin Garcia",
            "nroserie": "51101289"
            }
consultas.push(item);
console.log(consultas);
}
agregar();

function mostrarNroSerie(){
    for(let i=0;i<consultas.length;i++){
    console.log(consultas[i].nroserie);
    }
    console.log(consultas.length);
    }
    mostrarNroSerie();    

