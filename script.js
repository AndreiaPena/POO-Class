class Employees {
    constructor(id, nom, prenom, naissance, em, money){

        this.matricule = id; 
        this.nom = nom.toUpperCase(); 
        this.prenom = prenom.substr(0,1).toUpperCase() + prenom.substr(1); 
        this.naissance = naissance; 
        this.embauche = em; 
        this.salaire = money
    }
    
        getAge(){ 
            let dateDeNaissance = new Date(this.naissance);
            var dateActuelle = Date.now();
            // différence des heures
            var time_diff = dateActuelle - dateDeNaissance.getTime();
             // différence de jours
            var age = Math.floor(time_diff / (1000 * 3600 * 24)/365);
            // afficher la différence
            return age;
        }
      

        getAnciennete(){
            let dateEmbauche = new Date(this.embauche);
            var dateActuelle = Date.now();
            // différence des heures
            var time_diff = dateActuelle - dateEmbauche.getTime();
             // différence de jours
            var annee = Math.floor(time_diff / (1000 * 3600 * 24)/365);
            // afficher la différence
            return annee;
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
            Nom complet : ${this.nom} ${this.prenom} 
            Age : ${this.getAge()}
            Ancienneté : ${this.getAnciennete()}
            Salaire : ${this.salaire}
            `
        }
}

const pierre = new Employees( 1, 'pierre','giraud', '3 January 1969', '3 January 1990', 2000)
const mathilde = new Employees( 1, 'mathilde','p', '3 January 1969', '3 January 1990', 2000)
const anne = new Employees( 1, 'anne','giraud', '3 January 1969', '3 January 1990', 2000)

console.log(pierre.getAge());
console.log(pierre.getAnciennete());
console.log(pierre.augmenterSalaireByAnciennete());
console.log(pierre.afficherEmployé());
