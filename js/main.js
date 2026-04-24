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
    let n = Math.random * 10
    let n1 = Math.round(n);

    console.log(n)
    console.log(n1)
    console.log(arrayGaleria[n1])

    //let imagen = document.querySelector(#imagenDinamica)
    //imagen.src = arrayGaleria[n].src;

}

fotoAleatoria()