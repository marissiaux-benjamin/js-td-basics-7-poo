class Personnage {
    constructor(nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.inventaire = {
            piecesOr: 10,
            cles: 1
        };
    }

    // Ajoute une méthode décrire ici
    decrire() {
        return `${this.nom} a ${this.force} pt de force, ${this.sante}. Dans son inventaire: ${this.inventaire.cles}clé et ${this.inventaire.piecesOr} pièces d'or`;
    }

    // Ajoute une méthode attaquer ici
    attaquer() {

    }
}

// Crée un nouvel objet Aurora
const Aurora = new Personnage('Aurora', 100, 100);
// Crée un nouvel objet monstre
const monstre = new Personnage('Goltane', 200, 200);
// Affiche le message de bienvenue
alert('Bonjour et bienvenue dans "Les quêtes d\'Aurora" !');
// Affiche la description d'Aurora
console.log(`${Aurora.decrire()}`);
// Affiche le message pour le monstre
console.log(`un montres apparaît! Monstre : ${monstre.nom},${monstre.sante} santé, ${monstre.force} force`);
// Fais attaquer le monstre sur Aurora
console.log(`Le monstre attaque et met ${Aurora.sante - monstre.attaquer()} de dégat à notre Hero!`);
// Fais riposter Aurora
console.log(`${Aurora.nom} riposte et met ${Aurora.attaquer()} de dégat !`);

// Réaffiche la description d'Aurora
console.log(`santé d'Aurora: ${Aurora.sante}`);