let Utils= {
    randomNumber: (min=0, max=100)=>{
        return Math.floor(Math.random() *(max-min+1)) + min;
    },
    // otrafuntion: ()=>{
    //     console.log("soy otra funcion");
    // }
};
// Utils.otrafuncion=()=>{
//     console.log("soy otra funcion");
// };

const boton = document.getElementById("boton");
const input0 = document.getElementById("affirmation");
const input1 = document.getElementById("mantra");
const campoTexto = document.getElementById("texto");
const imagen = document.getElementById("buda");
let arrTextos0 = [
    "Je suis capable. J'ai le potentiel pour réussir.", 
    "Ma présence est mon pouvoir.", 
    "Je mérite le meilleur et je l'accepte à bras ouverts.",
    "Je m'améliore chaque jour dans tous les domaines."
];
let arrTextos1 = [
    "Om Shanti Shanti Shanti", 
    "Om Parama Prema Rupaya Namaha",
    "Om Tare Tuttare",
    "Om Ah Hum"
];
let cantidadMaximaT0 = arrTextos0.length -1;
let cantidadMaximaT1 = arrTextos1.length -1;

let listener = (event)=>{
    // console.log(event);
    // console.log("hola");
    // console.log("input0",input0.checked);
    // console.log("input1",input1.checked);
    // console.log("textos0",arrTextos0[3]);
    // console.log("textos1",arrTextos1);
    if(input0.checked){
        campoTexto.innerHTML=arrTextos0[Utils.randomNumber(0,cantidadMaximaT0)];
        imagen.style.display="none";
    }else if(input1.checked){
        campoTexto.innerHTML=arrTextos1[Utils.randomNumber(0,cantidadMaximaT1)];
        imagen.style.display="none";
    }
};
boton.addEventListener("click", listener);