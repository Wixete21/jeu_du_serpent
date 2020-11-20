
document.addEventListener("DOMContentLoaded", function(event) {

    //Le jeu
    class Jeu{

        constructor(_idSvg, _idPointage){

            console.log("Création du jeu");

            this.s = Snap(_idSvg);

            this.sortiPointage = document.querySelector(_idPointage);

            this.grandeurCarre = 20;
            this.grandeurGrille = 15;


        }

        nouvellePartie(){

        this.finPartie();

        this.affichagePointage(1);

        this.pomme = new Pomme(this);

        this.serpent = new Serpent();

        }

        finPartie(){
            if(this.pomme !== undefined){
                this.pomme.supprimePomme();
                this.pomme = undefined;
            }

        }

        affichagePointage(_lePointage){
            this.sortiPointage.innerHTML = _lePointage;
        }


    }

    //Le serpent
    class Serpent{

        constructor(_leJeu){

            console.log("Création du serpent");

            this.leJeu = _leJeu;

            document.addEventListener("keydown", this.verifTouche.bind(this));
        }

        verifTouche(_evt){
            var evt = _evt;

            console.log(evt.keyCode);

            this.nextMoveX = 1;
            this.nextMoveY = 0;

            this.deplacement(evt.keyCode);
        }

        deplacement(dirCode){
            switch (dirCode) {
                case 37:
                    this.nextMoveX = -1;
                    this.nextMoveY = 0;
                    break;
                case 38:
                    this.nextMoveX = 0;
                    this.nextMoveY = -1;
                    break;
                case 39:
                    this.nextMoveX = 1;
                    this.nextMoveY = 0;
                    break;
                case 40:
                    this.nextMoveX = 0;
                    this.nextMoveY = 1;
                    break;
            }

            console.log(this.nextMoveX, this.nextMoveY);
        }

        controleSerpent(){
            //aller a 1h23m 
        }

        dessineCarre(x, Y){

        }

        supprimeSerpent(){

        }
    }
    //La pomme

    class Pomme{

        constructor(_leJeu){

            console.log("Création de la pomme");

            this.leJeu = _leJeu;

            this.pomme = [];

            this.ajoutePomme();
        }

        ajoutePomme(){
            var posX = Math.floor(Math.random() * this.leJeu.grandeurGrille);
            var posY = Math.floor(Math.random() * this.leJeu.grandeurGrille);

            this.pomme = [this.leJeu.s.rect(posX * this.leJeu.grandeurCarre, posY * this.leJeu.grandeurCarre, this.leJeu.grandeurCarre, this.leJeu.grandeurCarre).attr({fill:'red'}), posX,posY];
        }
        supprimePomme(){
            this.pomme[0].remove();
        }
    }


    var unePartie = new Jeu("#jeu", "#pointage");

    var btnJouer = document.querySelector("#btnJouer");
    btnJouer.addEventListener('click', nouvellePartie);

    function nouvellePartie(){
        unePartie.nouvellePartie();
    }
});