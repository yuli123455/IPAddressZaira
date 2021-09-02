export class Location {
    valueInput : any;
    isIpAddress : boolean;

    constructor()
    {
        this.isIpAddress = true;
    }
}

export class LocationMap {

    lat : number;
    lng : number;
    constructor() {
        this.lat = 0;
        this.lng = 0;
    }
}