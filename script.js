// Cogemos el Id de la imagen principal que queremos cambiar
let imgProducto = document.getElementById("imgProducto")

// Cogemos las imagenes miniaturas
let miniaturas = document.querySelectorAll(".miniaturas img")

function setMini(position) {
  if (position == "0") {
    imgProducto.style.transform = "rotateZ(0deg)"
  }

  if (position == "1") {
    imgProducto.style.transform = "rotateZ(35deg)"
  }

  if (position == "2") {
    imgProducto.style.transform = "rotateZ(-55deg) scale(0.75)"
  }

  miniaturas[0].style.backgroundColor = "#fff1d9"
  miniaturas[1].style.backgroundColor = "#fff1d9"
  miniaturas[2].style.backgroundColor = "#fff1d9"
  miniaturas[position].style.backgroundColor = "#fdc10e"
}

// Cogemos todos los botones de tallas.
let sizes = document.querySelectorAll(".info-detalle button")

function setSize(position) {
  sizes[0].style.backgroundColor = "#fff1d9"
  sizes[1].style.backgroundColor = "#fff1d9"
  sizes[2].style.backgroundColor = "#fff1d9"
  sizes[position].style.backgroundColor = "#fdc10e"
}

// MENU RESPONSIVE

// Variable que controlara si el menu responsive esta visible o no
// Inicia en falso porque inicialmente está oculto.

let menuResponsiveVisible = false
let navResponsive = document.querySelector(".nav-responsive")
let closeResponsive = document.getElementById("close-responsive")
let nav = document.getElementById("nav")

navResponsive.onclick = function () {
  if (menuResponsiveVisible == false) {
    nav.className = "menu-responsive"
    menuResponsiveVisible = true
  }
}

closeResponsive.onclick = function () {
  if (menuResponsiveVisible == true) {
    nav.className = ""
    menuResponsiveVisible = false
  }
}
