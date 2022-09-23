function changeText() {
    var textDom = document.querySelector("#Dom");
    textDom.classList.remove("Element");
    var btnGo = document.querySelector("#botonGo");
    btnGo.classList.remove("Element");
  
    btnGo.addEventListener("click", function () {
      var text = document.querySelector("h1");
      text.textContent = textDom.value;
      textDom.classList.add("Element");
      btnGo.classList.add("Element");
    });
  }
  
  var btnChangeText = document.getElementById("botonChangeText");
  btnChangeText.addEventListener("click", changeText);

   // menu desplegable que permita elegir color de fondo: rojo azul , verde, amarillo
   // si lo selecciona la letra del texto de ser negra.