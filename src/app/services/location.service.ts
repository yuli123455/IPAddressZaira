import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from "../services/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private endpointPath: string;

  constructor(private http: HttpClient) {
    this.endpointPath = 'https://geo.ipify.org/api/v1?apiKey=at_4wxRT4rtMDsMzNYuxZJdQBCA7nSI7&';
   }

  public getLocation(dataLocation: Location): Observable<any>
  {
    if (dataLocation.isIpAddress)
    {
      return this.http.get(this.endpointPath + 'ipAddress=' + dataLocation.valueInput);
    }
    else
    {
      return this.http.get(this.endpointPath + 'domain=' + dataLocation.valueInput);
    }
    
  }
}
