var ia = Math.floor(Math.random() * 100);
console.log("Voici le chiffre a trouvé " + ia);




function jeu() {
    var joueur = document.getElementById("saisie").value;
    console.log("chiffre du joueur " + joueur);

    var result = Math.abs(ia - joueur);
    if (result == 0) {
        document.getElementById("reponse").innerHTML = joueur+ " You win ! ! ! ";
    } else if (result < 5) {
        document.getElementById("reponse").innerHTML =  joueur+" You burn ! ! ! ";
    } else if (result > 5) {
        document.getElementById("reponse").innerHTML =  joueur+" You freeze ! ! ! ";
    }

};
