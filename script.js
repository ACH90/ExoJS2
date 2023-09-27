

button.innerText = "GO"

document.addEventListener("DOMContentLoaded", function () {
    //L'utilisation courante de l'événement "DOMContentLoaded" 
    //est d'attacher des gestionnaires d'événements et de manipuler 
    //le contenu de la page web de manière sécurisée. Par exemple, 
    //dans l'exemple précédent, nous avons utilisé "DOMContentLoaded" 
    //pour nous assurer que notre script JavaScript ne s'exécute que 
    //lorsque la page HTML est prête à être interagie par le code JavaScript.
    const searchInput = document.getElementById("input");
    const searchButton = document.getElementById("button");
    const itemList = document.getElementById("itemList");
    
    searchButton.addEventListener("click", function () {
        const searchTerm = searchInput.value.toLowerCase();
        const items = itemList.getElementsByTagName("li");
        
        for (let i = 0; i < items.length; i++) {
            const itemText = items[i].textContent.toLowerCase();
            //Dans la fonction de gestionnaire d'événements, nous avons obtenu 
            //la valeur saisie par l'utilisateur dans le champ de saisie en utilisant 
            //searchInput.value et converti cette valeur en minuscules 
            //(en utilisant toLowerCase()) pour que la recherche ne soit pas sensible à la casse.
            if (itemText.includes(searchTerm)) {
                items[i].classList.add("highlight");
            } else {
                items[i].classList.remove("highlight");
            }
        }
    });
});




