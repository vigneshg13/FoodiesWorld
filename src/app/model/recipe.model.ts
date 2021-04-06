export class Recipe{

    public id: number;
    public name: string;
    public description: string;
    public comments: string;

    constructor(id:number,name:string,desc:string,comments:string){
        this.id=id;
        this.name=name;
        this.description=desc;
        this.comments=comments;
    }

}