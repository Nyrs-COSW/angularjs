import {Nursingservices} from './nursingservices';

export class Request {
    private date: string;
    private nurseId: number;
    private patientId: number;
    private nursingservices: Nursingservices;
    private accepted: Boolean;

    constructor(date: string, nurseId: number, patientId: number, nursingservices: Nursingservices, accepted: Boolean) {
        this.date = date;
        this.nurseId = nurseId;
        this.patientId = patientId;
        this.nursingservices = nursingservices;
        this.accepted = accepted;
    }
}