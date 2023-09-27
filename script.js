let button = document.getElementById("button")
let photo = document.getElementById("cheucheu")

button.innerText = "Cacher"
button.style.opacity = "1"

// photo.addEventListener("click", afficherMasquer);

function afficherMasquer() {
    if (photo.style.opacity === "0") {
        photo.style.opacity = "1"
        button.innerText = "Cacher"
        photo.style.transition = "opacity 86400s"
    } else {
        photo.style.opacity = "0"
        button.innerText = "Afficher"
        photo.style.transition = "opacity 86400s"
    }
}

