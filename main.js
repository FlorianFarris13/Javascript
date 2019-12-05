/////// Verification des champs formulaire ///////////
document.getElementById('formulaire').addEventListener("submit", function(e){
    var error;

  if(document.getElementById('pseudo').value == ""){
    error = "veuillez entrer votre pseudo";
 
  }
  if(document.getElementById('nom').value == ""){
    error = "veuillez entrer votre nom";

  }
  if (document.getElementById('prenom').value == ""){
    error = "veuillez entrer votre prenom";
 
  }
  if (document.getElementById('mdp').value == ""){
    error = "veuillez entrer votre mot de passe";
      }
  if (document.getElementById('courriel').value == ""){
    error = "veuillez entrer votre adresse mail";
    
  }
  if(document.getElementById('DateNais').value == ""){
    error = "veuillez entrer votre date de naissance";
    
  }
  if(document.getElementById('sexe').value == ""){
    error = "veuillez entrer votre sexe";
    
  }
///// Calcul de la majorite /////////
    var today = new Date();
    var dtn=document.getElementById('DateNais').value; // on lit la date de naissance
    var an=dtn.substr(6,4); // l'année (les quatre premiers caractères de la chaîne à partir de 6)
    var mois=dtn.substr(3,2);// On selectionne le mois de la date de naissance
    var day= dtn.substr(0,2); // On selectionne la jour de la date de naissance

    var dateNaissance = new Date(an + "-" + mois + "-" + day);
    var age = today.getFullYear() - dateNaissance.getFullYear();
    var m = today.getMonth() - dateNaissance.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dateNaissance.getDate())) {
        age = age - 1;
    }
    if(age<18) {
    error="tu n'as pas 18ans";
  }

  if (document.getElementById('courriel').value =="root@paca.happy-dev.fr" || document.getElementById('courriel').value =="admin@paca.happy-dev.fr" || document.getElementById('courriel').value =="dieu@paca.happy-dev.fr") {
    error = "The mail " + document.getElementById('courriel').value + " is already taken";
    }
    
    if(document.getElementById('pseudo').value=="root" || document.getElementById('pseudo').value=="admin" || document.getElementById('pseudo').value=="dieu"){
        error= "The username " + document.getElementById('pseudo').value + " is already taken";
    }

    if (error) {
    e.preventDefault();
    document.getElementById("error").innerHTML = error;
    return false;
  } 
  else {
    alert('Formulaire envoyé !');
  }

});

