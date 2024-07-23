let rows = prompt("Veuillez entrer le nombre de lignes pour un triangle inversé:");
rows = parseInt(rows);

for (let i = rows; i >= 1; i--) {
    let output = "";
    for (let j = 1; j <= i; j++) {
        output += "*";
    }
    console.log(output);
}
