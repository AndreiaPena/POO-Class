class Employees {
    constructor(id, nom, prenom, naissance, em, money){

        this.matricule = id; 
        this.nom = nom.toUpperCase(); 
        this.prenom = prenom[0].toUpperCase() + prenom.substr(1) ; 
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

const pierre = new Employees( 1, 'Giraud','pierre', '3 January 1969', '3 January 1990', 3000)
const mathilde = new Employees( 2, 'prechaud','mathilde', '5 May 1989', '14 August 2000', 2600)
const anne = new Employees( 3,'frichard', 'anne', '20 February 1977', '13 May 1990', 4000)


console.log(pierre.afficherEmployé());
console.log(mathilde.afficherEmployé());
console.log(anne.afficherEmployé());
