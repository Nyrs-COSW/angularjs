export class Patient {

private username: string;
private firstname: string;
private lastname: string;
private image: string;
private email: string;
private password:string;
private age: number;
private creditCardNumber: number;
private creditCVV: number;

constructor(username:string,firstname: string, lastname: string, image: string, email:string,password:string, age:number, creditCardNumber:number, creditCVV: number) {
        this.username=username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.image = image;
        this.email=email;
        this.password=password;
        this.age=age;
        this.creditCardNumber=creditCardNumber;
        this.creditCVV=creditCVV;

        }
}