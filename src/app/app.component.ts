import { Component } from '@angular/core';
import { LocationService } from "./services/location.service";
import { LocationMap } from "./services/location";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  locationMap: LocationMap
  dataLocation:any;
  lat:any;
  lng:any;

  constructor(private locationService : LocationService) { 
    this.dataLocation = undefined;
    this.locationMap = new LocationMap();
  }

  //Clear variables 
  clearVariables()
  {
    this.dataLocation = undefined;
  }

  //Handler to get location
  handlerClick(ipAddressValue : any)
  {
      const self = this;
      this.clearVariables();
      let newLocation = new LocationMap()
      this.locationService.getLocation(ipAddressValue)
      .subscribe(data => {
        this.dataLocation = data;
        newLocation.lat = data.location.lat;
        newLocation.lng = data.location.lng;
        self.locationMap = newLocation;
      },
      (err) => {
        self.locationMap = newLocation;
      });
  }
}
