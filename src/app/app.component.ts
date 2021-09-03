import { Component } from '@angular/core';
import { LocationService } from "./services/location.service";
import { Location, LocationMap } from "./services/location";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  
  locationMap: LocationMap
  dataLocation:any;
  defaultIP : any;
  
  constructor(private locationService : LocationService) { 
    this.dataLocation = undefined;
    this.locationMap = new LocationMap();
    this.getCurrentIP();
  }

  getCurrentIP()
  {
    this.locationService.getCurrentIp()
    .subscribe(data => {
      let location = new Location();
      location.isIpAddress = true;
      location.valueInput = data.ip;
      this.toGetLocation(location);
    },
    (err) => {
    });
  }

  //Clear variables 
  clearVariables()
  {
    this.dataLocation = undefined;
  }

  //Handler to get location
  handlerClick(ipAddressValue : any)
  {
      this.clearVariables();
      this.toGetLocation(ipAddressValue);
  }

  toGetLocation(ipAddressValue : any)
  {
    const self = this;
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
