import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from "../services/location";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private endpointPath: string;
  private endpointPathLocal: string;

  constructor(private http: HttpClient) {
    this.endpointPath = 'https://geo.ipify.org/api/v1?apiKey=at_4wxRT4rtMDsMzNYuxZJdQBCA7nSI7&';
    this.endpointPathLocal = 'http://api.ipify.org/?format=json';
   }

  public getCurrentIp(): Observable<any>
  {
      return this.http.get(this.endpointPathLocal); 
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
