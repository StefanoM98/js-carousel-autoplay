// CREIAMO L'ARREY DI IMMAGINI DA POI INSERIRE TRAMITE JS

const imgArrey = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"]
console.log(imgArrey);
const itemsContainer = document.querySelector(".slider-items")
const thumbsContainer = document.querySelector(".thumbs")
let thumbsDivs = ""
 
for (let i = 0; i < imgArrey.length; i++) {
    const currentImg = imgArrey[i];

    const sliderItems = `
        <div class="item">
            <img src="${currentImg}" alt="">
        </div>`

    thumbsDivs = 
    `<div class="thumb" style ="height: calc((300px) / ${imgArrey.length})">
        <img src="${currentImg}" alt="">
     </div>`
     
    itemsContainer.innerHTML += sliderItems;
    thumbsContainer.innerHTML += thumbsDivs;
}

// STAMPO LA PRIMA IMMAGINE
const itemsArrey = document.getElementsByClassName("item")
console.log(itemsArrey);

let showItemInIndex = 0;
itemsArrey[showItemInIndex].classList.add("active")

// ATTIVIAMO I BOTTONI IN MODO DA CAMBIARE IMG AL CLICK
const nextImg = document.querySelector(".next")
const prevImg = document.querySelector (".prev")

// GESTIAMO IL BOTTONE NEXT
nextImg.addEventListener("click", nextImage)
setInterval(nextImage, 3000)

// GESTIAMO IL BOTTONE PREVIOUS

prevImg.addEventListener("click", function() {
    
    itemsArrey[showItemInIndex].classList.remove("active");
    
    if (showItemInIndex === 0){
        showItemInIndex = imgArrey.length -1
    } else{
        showItemInIndex--;

    }

    itemsArrey[showItemInIndex].classList.add("active");
});

// FUNZIONE PER L'IMMAGINE SUCCESSIVA
function nextImage() {
    // FACCIAMO SCORRERE LE IMMAGINI
    itemsArrey[showItemInIndex].classList.remove("active");
    
    if (showItemInIndex < imgArrey.length - 1) {
        showItemInIndex++;
    } else {
        showItemInIndex = 0
    }

    itemsArrey[showItemInIndex].classList.add("active");
}

