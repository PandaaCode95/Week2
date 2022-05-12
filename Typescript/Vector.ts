export class Vector{
    // private n:Number;
    // private m:number;
    private vector : number[];

    constructor(n:Number,m:Number){
        this.vector=crearVector(n,m);
        

        function crearVector(n,m):number[]{
            let nVector:number[] = [];

            for(let i = 0 ; i<n ; i++){
                nVector[i] = Math.round(Math.random()*m);
                }
                return nVector;  
            }

    }
    public print(){
        console.log(this.vector)
    }
    public add(v1:Vector):Vector{

             for(let i=0; i< this.vector.length; i++){
               this.vector[i] = this.vector[i]+ v1.vector[i];
             }
             return  this
     }
     public subs(v1:Vector):Vector{

        for(let i=0; i< this.vector.length; i++){
          this.vector[i] = this.vector[i]- v1.vector[i];
        }
        return  this
    }
    public prod(v1:Vector):Vector{

        for(let i=0; i< this.vector.length; i++){
          this.vector[i] = this.vector[i]*v1.vector[i];
        }
        return  this
    }
    public mul(n:number):Vector{

        for(let i=0; i< this.vector.length; i++){
          this.vector[i] = this.vector[i]*n;
        }
        return  this
    }




}
let vect = new Vector(3,4);
let vect2 = new Vector(3,4);
vect.subs(vect2)
vect.print();