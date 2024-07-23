let jour = prompt("Veuillez entrer un jour de la semaine (par exemple, 'Lundi', 'Mardi') :");

switch (jour) {
    case 'Lundi':
        console.log("Lundi : Aller à la gym");
        break;
    case 'Mardi':
        console.log("Mardi : Étudier JavaScript");
        break;
    case 'Mercredi':
        console.log("Mercredi : Assister à un cours de danse");
        break;
    case 'Jeudi':
        console.log("Jeudi : Aller à la bibliothèque");
        break;
    case 'Vendredi':
        console.log("Vendredi : Regarder un film");
        break;
    case 'Samedi':
        console.log("Samedi : Faire une randonnée");
        break;
    case 'Dimanche':
        console.log("Dimanche : Se détendre et lire un livre");
        break;
    default:
        console.log("Veuillez entrer un jour de la semaine valide.");
        break;
}
