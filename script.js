let listeDeroulanteOk = document.getElementById("okok")
let button = document.getElementById("button")
let text = document.getElementById("text")



function texteDelOption() {

    // let selectedOption = listeDeroulanteOk.options[listeDeroulanteOk.selectedIndex];
    text.value = listeDeroulanteOk.value;

}

button.addEventListener("click",texteDelOption)

// const choixCouleur  = document.getElementById('okok')
// const bouton = document.getElementById('button')
// const champsTexte = document.getElementById('text')

// function ajouterTexte() {
//     champsTexte.value = choixCouleur.value
// }

// bouton.addEventListener('click' , ajouterTexte)