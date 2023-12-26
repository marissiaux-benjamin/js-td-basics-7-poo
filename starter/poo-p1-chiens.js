// 1. Crée une classe Chien
class Chien {
    constructor(nom, race, taille) {
        this.nom = nom;
        this.race = race;
        this.taille = taille;
        // Crée le constructeur avec les propriétés
        // et la méthode aboyer
    }

    // Ajoute la méthode aboyer ici
    aboyer() {
        if (this.taille > 50) {
            return 'WOUF! WOUF!';
        } else {
            return 'waf! waf!';
        }
    }

    // Ajoute la méthode decrire ici
    decrire(){
        return `${this.nom} est un(e) ${this.race} et mesure ${this.taille} cm au jabot.`;
    }
}

// 2. Instancie des chiens à partir de la classe
// et assigne-les aux variables Crockdur et Milou
const Vanille = new Chien('Vanille', 'Golden Retriver', 55);
const Kiki = new Chien('Kiki', 'Jack Russel', 20);



// 3. Affiche la description de chaque chien dans la console
console.log(Vanille.decrire());
console.log(Kiki.decrire());


// 4. Les chiens rencontrent un chat...
// Affiche le message dans la console avec les aboiements de chaque chien
document.querySelector('h1').insertAdjacentHTML('afterend',`<i>Tiens, un chat ! ${Vanille.nom} aboie: ${Vanille.aboyer()}</i>`);
document.querySelector('h1').insertAdjacentHTML('afterend',`<b>Tiens, un chat ! ${Kiki.nom} aboie: ${Kiki.aboyer()}</b>`);
