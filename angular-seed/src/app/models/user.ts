export class User {
    private username: string;
    private firstname: string;
    private lastname: string;
    private image: string;
    private email: string;
    private password:string;

    constructor(username:string,firstname: string, lastname: string, image: string, email:string,password:string) {
        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email=email;
        this.password=password
    }
}