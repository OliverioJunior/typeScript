const number = document.querySelector("#number-1") as HTMLInputElement;
const number_ = document.querySelector("#number-2") as HTMLInputElement;
const button = document.querySelector(".somar") as HTMLButtonElement;
const resultado = document.querySelector(".resultado") as HTMLDivElement;
 const input = document.querySelector("#input") as HTMLInputElement;
button.addEventListener<T>("click",<>(a: T,b: T)=>{
    a = number.value 
    b = number_.value
    resultado.innerHTML
})
 input.addEventListener('input', (e) =>{
    const _input = e.currentTarget as HTMLInputElement;
    console.log(_input.value)
 })

 //Generic types

 function adicionaApendiceALista<T>(array: any[],valor:T) {
     return array.map( i => i + valor);
 }

/*  adicionaApendiceALista([1,2,3],1) */

 interface IUsuario {
     id: string,
     email: string
 }

 interface IAdmin extends IUsuario{
     cargo?: 'gerente' | 'coordenador' | "supervisor" | "funcionario";
 }

 function redirecione(usuario: IUsuario | IAdmin) {
     if("cargo" in usuario) {
            //redirecionar para a área de administração
     }

            //redirecionar para a área de usuário
 }

 function redicerionar(usuario:IAdmin) {
     if(usuario.cargo) {

     }
 }