//DOMTokenList est une interface DOM représentant un ensemble de "token" (marques) séparées par un espace qui contient des propriétés et fonctions qui manipulent les classes 
//classList :  récupére et affiche toutes les classes. On commence par la classList avant d'appeler d'autres méthodes
/*Les méthodes*/
//contains : vérifie la classList pour une classe spécicique 
//add : ajoute class
//remove : supprime une  class 
//toggle : bascule  une class 

//cible DOM

const navToggle = document.querySelector(".nav-toggle");
const link = document.querySelector(".links");
//Gestionnaire d’événement
navToggle.addEventListener('click', () => {
    /*Débogage */
    //console.log(link.classList);
    //console.log(link.classList.contains.('rand'));//renvoie false 
    
    //Méthode 1 
    //On vérifie si l'élément contient la classe show-links 
    /*
    if (link.classList.contains("show-links")) { 
        //Si l'est contient on le supprime 
        link.classList.remove("show-links");
    }//sinon on le rajoure 
    else{
        link.classList.add("show-links")
    }

    */
    //Méthode 2
    //sinon on peut utiliser la fonction toggle qui bascule une classe à une autre 
    //permet l'optimisation du code 
    link.classList.toggle("show-links");
});