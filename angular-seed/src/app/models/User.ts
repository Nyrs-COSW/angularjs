export class User {
    public username: string;
    public firstname: string;
    public lastname: string;
    public image: string;
    public email: string;
    public password:string;
    public age: number;
    public role:string;

constructor(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:number ,role:string) {
        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email=email;
        this.password=password;
        this.role=role;
        this.age=age;

    }
}