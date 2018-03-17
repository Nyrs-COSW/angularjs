import {Nursingservices} from './nursingservices';
import {User} from './User';


export class Request {
    private date: string;
    private nurse: User;
    private patient: User;
    private nursingservices: Nursingservices;
    private accepted: Boolean;
    private code: string;
    private description: string;

    constructor(date: string, nurse: User, patient: User, nursingservices: Nursingservices, accepted: Boolean, code: string, description: string) {
        this.date = date;
        this.nurse = nurse;
        this.patient = patient;
        this.nursingservices = nursingservices;
        this.accepted = accepted;
        this.code = code;
        this.description = description;
    }

}