function Colores(color) {
    var body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = color;
    console.log(color);
}

var color = document.querySelector("#color");

color.addEventListener("input", e => {
    document.body.style.backgroundColor = e.target.value;
    console.log(e.target.value);
});