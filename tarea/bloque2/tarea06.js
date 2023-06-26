let altura = 24;

for (let i = 0; i < altura; i++) {
    let espacios = " ".repeat(altura - i - 1);
    let asteriscos = "*".repeat(2 * i + 1);
    console.log(espacios + asteriscos);
}

for (let i = 0; i < 3; i++) {
    let espacio = " ".repeat(altura -1);
    console.log(espacio + "|");
}
