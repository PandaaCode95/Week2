export class Book{
    private title:string;
    private nPages:number;
    private isbn:string;
    private author:string;
    private editorial:string;

    constructor(title:string,author:string){
        this.title= title;
        this.nPages= Pages();
        this.isbn= isbn();
        this.author=author;
        this.editorial=editorial();
    
    function Pages():number{
        let nPags= Math.round(Math.random()*500)
        return nPags;
    }
    function isbn():string{
        let res=[];
        let final= "ISBN ";
        for(let i = 0; i<13;i++){
            res[i]=Math.round(Math.random()*10)
            if(i<3){
                final = final+ res[i];
            }else if(i<4){
                final = final+"-"+res[i]
            }else if(i<5){
                final = final + res[i]
            }else if(i<6){
                final = final+res[i]+"-";
            }else if(i<11){
                final = final+res[i]
            }else if(i<12){
                final = final+res[i]+"-"
            }else{
                final= final+res[i]
            }}
        return final;
        }    
       
    function editorial():string {
        let editoriales = ["Anaya", "Santillana", "Blue Book", "Cambridge","Planeta","Grefusa","Howarts","Leyndell"]
        let editorial = editoriales[Math.round(Math.random() * editoriales.length)]
        return editorial;
    }
    
}
        public setTitle(nwtitle){
                this.title=nwtitle;
        }
        public setAuthor(nwauthor){
                this.author=nwauthor;
        }
        public getTitle():string{
                return this.title;
        }
        public getAuthor():string{
                return this.author;
        }
        public toString1():string{
            let res:string =""
            for (let atribute in this){
                if(typeof this[atribute] == "string"|| typeof this[atribute] == "string"){
                    res = res + atribute+"-"+ this[atribute]+"\n";
            }
        }
        return res;
        }
}
