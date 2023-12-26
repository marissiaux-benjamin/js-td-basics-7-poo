 // A. RAPPEL : LES OBJETS

// Modélisation de Tobby
const dominique = {
    nom: "Dominique",
    chien: {
        nom: "Tobby",
        race: "Border Collie",
        taille: 75,
        aboyer: function() {
            return "Wouf ! Wouf !";
        },
    },
};

// Modélisation de Sloopy
const yvette = {
    nom: "Yvette",
    chien: {
        nom: "Sloopy",
        race: "Caniche",
        taille: 25,
        aboyer: function() {
            return "Wah ! Wah !";
        },
    },
};

// Nos deux chiens rencontrent un chat...
console.log(`Tiens, un chat ! ${dominique.nom} aboie: ${dominique.chien.aboyer()}`);
console.log(`Tiens, un chat ! ${yvette.nom} aboie: ${yvette.chien.aboyer()}`);

// B. LES CLASSES

// Crée une classe Chien
class Chien {
    constructor(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
    }

    aboyer() {
        if (this.taille > 50) {
            return "Wouf ! Wouf !";
        } else {
            return "Wah ! Wah !";
        }
    }
}

// Instanciation de chiens à partir de la classe
const Tobby = new Chien("Tobby", "Border Collie", 75);
const Sloopy = new Chien("Sloopy", "Caniche", 25);
// ... (Crée d'autres chiens si nécessaire)

// Nos chiens rencontrent un chat...
console.log(`Tiens, un chat ! ${Tobby.nom} aboie: ${Tobby.aboyer()}`);
console.log(`Tiens, un chat ! ${Sloopy.nom} aboie: ${Sloopy.aboyer()}`);
