export class Quote {  // Making quote class available to components
    public showQuote:boolean;
    public showDetails:boolean;
     constructor(public id:number, public quotation:string, public author:string, public poster:string, public timePassed:Date, public vote : number){
        this.showDetails=false
        this.showQuote=false
    }
}
