const model = document.querySelector(".model");
const overlay = document.querySelector(".overlay");


const openModal =() =>{
    console.log("Modal is Open");
    model.classList.add("active");
    overlay.classList.add("overlayactive");

};

const closeModel =() =>{
    model.classList.remove("active");
    overlay.classList.remove("overlayactive");

};