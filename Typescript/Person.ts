export class Person {

        public nombre:string;
        public apellido:string;
        public altura:number;
        public edad:number;
        public peso:number;
        public pelo:string;
        public trabajo:string;
        public hobbies:object;
        private adress:string;

    constructor(nombre:string, apellido:string , adress:string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = 150 + Math.round(Math.random() * 50);
        this.edad = 16 + Math.round(Math.random() * 50);
        this.peso = 40 + Math.round(Math.random() * 80);
        this.pelo = pelo();
        this.trabajo = trabajo();
        // this.hobbies = hobbies();
        this.adress = adress;

        //Methods
        function pelo() {
            let pelos = ["azul", "rojo", "castaño", "rubio"]
            let pelo = pelos[Math.round(Math.random() * pelos.length)]
            return pelo;
        }
        function trabajo() {
            let trabajos = ["policia", "abogado", "medico", "programador"]
            let trabajo = trabajos[Math.round(Math.random() * trabajos.length)]
            return trabajo;
        }
        // function hobbies() {
        //     let hobbies = new Set();
        //     let options = ["Cantar", "Cocinar", "Bailar", "Gamer", "Peliculas", "Musica", "Guitarra"]
        //     hobbies.size = Math.round(Math.random() * 3)+1;
        //     for (let i = 0; i < hobbies.size; i++) {
        //         let index = Math.round(Math.random() * 7);
        //         hobbies.add(options[index])
        //     }
        //     return hobbies;
        // }
    }
    public printName(){
        console.log(this.nombre)
    }
    public setAdress(adress:string){
        this.adress = adress;
    }
    public getAdress():string{
        return this.adress;
    }
    
    calcularIMC() {
        let result = Math.round(this.peso / (this.altura * this.altura) * 10000)
        return result;
    }
    public yearofBirth():number {
        let result = 2022 - (this.edad);
        return result;
    }
    printAll(persona) {
        
        let res = "";
        for (let atribute in persona) {
            res = res + atribute + "-" + persona[atribute] + "\n ";
        }
        return res;
    }

}

// let edad = edad => 16 +(Math.round(Math.random()*80))
// let peso = peso => 40 + (Math.round(Math.random()*80))
// console.log(persona)
// console.log(persona2)
// console.log(persona3)
// console.log(persona4)
// console.log(persona4.calcularIMC())
// console.log(persona3.yearofBirth())
// console.log(persona.printAll(persona))

