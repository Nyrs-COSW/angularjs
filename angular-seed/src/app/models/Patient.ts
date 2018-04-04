export class Patient {

    private username: string;
public firstname: string;
public lastname: string;
public image: string;
public email: string;
public password:string;
public age: number;
public creditCardNumber: number;
public creditCVV: number;

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

