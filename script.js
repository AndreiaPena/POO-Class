
// création de la class Employees
class Employees {
// A chaque class, un constructor, que l'on crée avec 6 paramètres. L'ordre est important quand on va instancier les objets (Pierre, mathile et anne)
    constructor(matricule, nom, prenom, naissance, embauche, salaire){

// Chaque ligne est une propriété, ce constructeur possède 6 propriétés
// this renvoie à Employee ici
        this.matricule = matricule; 
        this.nom = nom.toUpperCase(); 
        this.prenom = prenom  ; 
        this.naissance = naissance; 
        this.embauche = embauche; 
        this.salaire = salaire
    }

        calcul(e){ 
            let dateDeNaissance = new Date(e);
            var dateActuelle = Date.now();
    // différence des heures
            var time_diff = dateActuelle - dateDeNaissance.getTime();
     // différence de jours
            var age = Math.floor(time_diff / (1000 * 3600 * 24)/365);
    // afficher la différence
            return age;
        }

        getAge (){
    return this.calcul(this.naissance)
        }

        getAnciennete(){
    return this.calcul(this.embauche)
        };

        augmenterSalaireByAnciennete(){
            if( this.getAnciennete() < 5){
               return this.salaire * 1.02;
            } else if (this.getAnciennete() < 10){
                return this.salaire * 1.05;
            } else {
                return this.salaire * 1.10;
            }
        }


        afficherEmployé() {
            return ` 
            Matricule : ${this.matricule}
            Nom complet : ${this.nom} ${this.prenom[0].toUpperCase()}${this.prenom.substr(1)}  
            Age : ${this.getAge()}
            Ancienneté : ${this.getAnciennete()}
            Salaire : ${this.salaire}
            `
        }
}


const pierre = new Employees( 1, 'Giraud','pierre', '3 January 1969', '3 January 1990', 3000)
const mathilde = new Employees( 2, 'prechaud','mathilde', '5 May 1989', '14 August 2000', 2600)
const anne = new Employees( 3,'frichard', 'anne', '02/23/1977', '05/13/1990', 4000)


console.log(pierre.afficherEmployé());
console.log(mathilde.afficherEmployé());
console.log(anne.afficherEmployé());
