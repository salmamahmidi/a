// Écrivez un programme qui utilise une boucle for pour imprimer les nombres de 1 à 10.
// Modifiez le programme pour imprimer le carré de chaque nombre au lieu du nombre lui-même.
// // Ajoutez une invite qui demande à l'utilisateur un nombre et utilisez une boucle for pour imprimer la table de multiplication de ce nombre jusqu'à 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n");
for (let i = 1; i <= 10; i++) {
    console.log(i * i);
}
console.log("\n"); 
let nombre = prompt("Entrez un nombre : ");
nombre = parseInt(nombre);
for (let i = 1; i <= 10; i++) {
    console.log(`${nombre} x ${i} = ${nombre * i}`);
}