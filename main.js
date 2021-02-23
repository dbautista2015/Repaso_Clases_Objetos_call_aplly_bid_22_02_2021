const constructores = new Object({
    constructor_humano(){
        this.name;
        this.maquina;
        return this;
    }
});
const data = {
    Humanos:{
        name:"Diana",
        maquina:"Siri"
    }
}
const constructor_humano = constructores.constructor_humano.bind(data.Humanos);
const humano = new Object();
humano.__proto__.constructor = constructor_humano();
const Metodos = Object.assign(humano);
Metodos.saludar = ()=>{
    return `Hola ${Humano.__proto__.constructor.name} cómo estás te saluda ${Humano.__proto__.constructor.maquina}`;
};
//Object.freeze(humano);
console.log(humano);


// const constructores = () =>{
//     this.name;
//     this.maquina;
// };

// constructores.call(data);
// let obj = new constructores();
// console.log(obj);

//const Humanos = Object.create(obj)