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


const h1= document.createElement("h1")
h1.textContent = "Cuenta"
documento.body.appendChild(h1)

const ul = document.createElement("ul")

for(let i=1; i <=4; i++) {
    console.log(i)
    const li = document.createElement("li")
    li.textContent = i;
    ul.appendChild(li)

}