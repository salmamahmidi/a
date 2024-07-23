let number = prompt("Veuillez entrer un nombre entre 1 et 5:");
number = parseInt(number);

if (number >= 1 && number <= 5) {
    for (let i = 0; i < number; i++) {
        console.log("Hello");
    }
} else {
    switch (true) {
        case (number < 1):
            console.log("Nombre trop petit");
            break;
        case (number > 5):
            console.log("Nombre trop grand");
            break;
        default:
            console.log("Entrée invalide");
            break;
    }
}
