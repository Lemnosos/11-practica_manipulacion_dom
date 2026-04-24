let arrayGaleria = [
    { id: 1, src: "./assets/viajes/viajes-1.jpg", alt: "Texto alternativo de la imagen 1" },
    { id: 2, src: "./assets/viajes/viajes-2.jpg", alt: "Texto alternativo de la imagen 2" },
    { id: 3, src: "./assets/viajes/viajes-3.jpg", alt: "Texto alternativo de la imagen 3" },
    { id: 4, src: "./assets/viajes/viajes-4.jpg", alt: "Texto alternativo de la imagen 4" },
    { id: 5, src: "./assets/viajes/viajes-5.jpg", alt: "Texto alternativo de la imagen 5" },
    { id: 6, src: "./assets/viajes/viajes-6.jpg", alt: "Texto alternativo de la imagen 6" },
    { id: 7, src: "./assets/viajes/viajes-7.jpg", alt: "Texto alternativo de la imagen 7" }
];

console.log(arrayGaleria)

function fotoAleatoria() {

    let n1 = Math.floor(Math.random() * 7);
    console.log(n1)
    console.log(arrayGaleria[n1])

    let contenedor = document.querySelector("#imagenDinamica")

    let imagen = document.createElement("IMG")
    imagen.src = arrayGaleria[n1].src;
    imagen.alt = "Imagen elegida aleatorimente"

    contenedor.append(imagen)

}

fotoAleatoria()

function cargarImagenes() {
    let contenedorPadre = document.querySelector("#padre")
    let fragmento = document.createDocumentFragment();

    arrayGaleria.forEach(elemento => {

        let contenedor = document.createElement("ARTICLE")
        contenedor.className = "flexItem"

        let imageContainer = document.createElement("DIV")
        imageContainer.className = "imgContainer"

        let imagen = document.createElement("IMG")
        imagen.src = elemento.src
        imagen.alt = elemento.alt

        let parrafo = document.createElement("P")
        parrafo.innerText = `Imagen en la posicion ${elemento.id}`
        imageContainer.append(imagen)

        contenedor.append(imageContainer, parrafo)
        fragmento.append(contenedor)
    })
    contenedorPadre.append(fragmento)
}
cargarImagenes()