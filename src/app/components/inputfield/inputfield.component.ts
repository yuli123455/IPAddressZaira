import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { LocationService } from "../../services/location.service";
import { Location } from "../../services/location";

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.sass']
})
export class InputfieldComponent implements OnInit {

  inputValue: string;
  @Output() ipAderessOutput = new EventEmitter<Location>();

  constructor(private locationService : LocationService) { 
    this.inputValue = '';
  }

  ngOnInit(): void {
  }

  //Clear variables 
  clearVariables()
  {
    this.inputValue = '';
  }

  //Validate input of IP Address
  validateInput(){

    if (this.inputValue === '')
    {
       return false;
    }
    return true;
  }

  ValidateIPaddress(ipaddress : any) {  
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {  
      return (true)  
    }  
    return (false)  
  }  

  //Handler to get location
  handlerClick()
  {
    if (this.validateInput())
    {
      let location = new Location();
      location.valueInput = this.inputValue;
      if (this.ValidateIPaddress(this.inputValue))
      {
        location.isIpAddress = true;
      }
      else{
        location.isIpAddress = false;
      }

      this.ipAderessOutput.emit(location);
      this.clearVariables();  
    }
  }
}
