//types - 
//
//interfaces - contratos para implementar suas classes 

interface IAnimal {
    nome: string;
    tipo: "terreste" | 'aquático';
    executarRugido(alturaEmDecibeis:number): void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

/* const animal: IAnimal = {
    nome: "Elefante",
    tipo:"aquático",
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)

}
animal.executarRugido(2)
const felino: IFelino ={
    nome:"Leão",
    tipo: "terreste",
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
} */