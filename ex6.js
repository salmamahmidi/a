let rows = prompt("Veuillez entrer le nombre de lignes pour un triangle:");
rows = parseInt(rows);

for (let i = 1; i <= rows; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += "*";
    }
    console.log(output);
}
