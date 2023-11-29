export class Contactform {
    customername:string;
    from:string;
    subject:string;
    body:string;
    constructor(customername:string,from:string,subject:string, body:string){
        this.customername=customername;
        this.body=body;
        this.subject=subject;
        this.from=from;
    }
}