// togle
//obtener toggle como la barra de navegacion
let toggle = document.querySelector(".icon-menu");
let navigation = document.querySelector("#nav-id");

//obtener que clase tiene actualmente la barra de navegacion
function showNav(){
    let nameClass = navigation.getAttribute("class");
    if(nameClass === "navegacion") {
        navigation.setAttribute("class", "show-nav");
    } else {
        navigation.setAttribute("class", "navegacion");
    }
}   

toggle.addEventListener("click", showNav);