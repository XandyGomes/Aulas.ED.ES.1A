// PALÍNDROMO

let frase = "Socorram-me, subi no ônibus em Marrocos"

let vetor = []

for (let i=0; i< frase.length; i++){
    vetor.push(frase.charAt(i))
}

vetor.unshift("X")

console.log(vetor)

let reverso = ""

while(vetor.length > 0){
    reverso += vetor.pop()
}

console.log(reverso)