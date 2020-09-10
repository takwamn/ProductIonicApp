export class Produit {

    public id : number;
    public nomp : String;
    public prixunitairep : number ;
    public qte : number;    

    constructor(id : number , nomp : String, prixunitairep : number ,qte : number ){

        this.id = id ;
        this.nomp = nomp;
        this.prixunitairep = prixunitairep  ;
        this.qte = qte;
      
    } 


    
}
