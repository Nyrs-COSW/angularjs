export class Nurse {
    private username: string;
private firstname: string;
private lastname: string;
private image: string;
private email: string;
private password:string;
private age:string;
private experience: string;
private years: string;

constructor(username:string,firstname: string, lastname: string, image: string, email:string,password:string,age:string,experience:string,years:string) {
        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email=email;
        this.password=password;
        this.age=age;
        this.experience=experience;
        this.years=years
    }
}
