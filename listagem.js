let listaAlunos = ["Josue","Armando","Joana","Josenil", "Joelma"]

for (let contador = 0; contador < listaAlunos.length; contador++) {
    console.log(contador)
    if (contador == 0) {
        console.log("Zero localizado: " + listaAlunos[contador])
    }else if (contador % 2 == 0) {
        console.log("Número par localizado: " + listaAlunos[contador])
    }else {console.log("Número impar localizado: "+ listaAlunos[contador])}
}