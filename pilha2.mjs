import Stack from "./lib/Stack.mjs";

let pilha1 = new Stack()
let pilha2 = new Stack()
let pilha3 = new Stack()


console.log(pilha1.print())
console.log("Está vazia?", pilha1.isEmpty)

pilha1.push(10)
pilha1.push(20)
pilha1.push(30)
pilha1.push(40)

console.log(pilha1.print())

console.log("Está vazia?", pilha1.isEmpty)

let removido = pilha1.pop()

console.log({removido})

console.log(pilha1.print())
console.log("Pilha 2: ", pilha2.print())

