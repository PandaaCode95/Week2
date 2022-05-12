import { Book } from "./Books";

export class Library{
    public arrayB : Book[];
    public adress : string;
    public manager : string;
    
    constructor(books:Book[],adress:string,manager:string){
        this.arrayB=books;
        this.adress=adress;
        this.manager=manager;

    }
    tostringLib():string{
        let res:string =""
        let resultado:string = "";

        for(let i = 0; i < this.arrayB.length; i++){
            resultado += "Book" + (i+1) + "\n" + this.arrayB[i].toString1() + "\n"; 
    
        } return resultado
    }

    

    getNumber():number{
        return this.arrayB.length
    }
    getByAuthor(author:string):Book[]{
        // let res:Book[]= [];
       return this.arrayB.filter((book ) => author==book.getAuthor())
        // return res;
    }
    getForByAuthor(author:string):Book[]{
        let res:Book[]=[];
        for (let i = 0; i<this.arrayB.length;i++){
            if (this.arrayB[i].getAuthor() == author){
                res.push(this.arrayB[i]);
            }
        }
        return res;
    }
    getNumberOfBooks():number{
        return this.arrayB.length
    }

}