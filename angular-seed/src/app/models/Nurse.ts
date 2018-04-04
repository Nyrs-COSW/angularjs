export class Nurse {
    private username: string;
public firstname: string;
public lastname: string;
public image: string;
public email: string;
public password:string;
public age:string;
public experience: string;
public years: string;

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
