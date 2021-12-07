interface IAnimal {
    nome: string;
    tipo: "terreste" | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean
}

interface ICanino extends IAnimal {
    porte:"pequeno"|"medio"|"grande"
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    domestico: true,
    nome:"cachorro",
    porte:"medio",
    tipo:"terreste",

    

}

const felino: IFelino ={
    nome:"Leão",
    tipo: "terreste",
    visaoNoturna: true,
    
}