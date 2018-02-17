export class Request {
    private date: Date;
    private nurseId: number;
    private patientId: number;
    private nursingservices: Nursingservices;

    constructor(date: Date, nurseId: number, 
        patientId: number, nursingservices: Nursingservices) {

        this.date = date;
        this.nurseId = nurseId;
        this.patientId = patientId;
        this.nursingservices = nursingservices;
    }
}