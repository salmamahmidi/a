let randomNumber = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 0;

while (true) {
    guess = prompt("Devinez un nombre entre 1 et 100:");
    guess = parseInt(guess);
    attempts++;

    if (isNaN(guess)) {
        console.log("Veuillez entrer un nombre valide.");
    } else if (guess < randomNumber) {
        console.log("Trop bas. Essayez encore.");
    } else if (guess > randomNumber) {
        console.log("Trop haut. Essayez encore.");
    } else {
        console.log("Félicitations! Vous avez deviné correctement en " + attempts + " tentatives.");
        break;
    }
}
