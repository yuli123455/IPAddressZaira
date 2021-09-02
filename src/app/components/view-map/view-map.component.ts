import { Component, AfterViewInit, Input } from '@angular/core';
import * as L from 'leaflet';
import { LocationMap } from "../../services/location";

@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.sass']
})
export class ViewMapComponent implements AfterViewInit {

  locationMapValues : LocationMap;
  map : any;
  markerGroup : any;


  @Input() set locationMap(val: any) {
    this.locationMapValues = val;
    this.createMap();
  }

  constructor() {
    this.locationMapValues = new LocationMap();
   }

  ngAfterViewInit(): void {
    
  }

  createMap()
  {

    if (this.map === undefined)
    {
      this.map = L.map('map').setView([this.locationMapValues.lat, this.locationMapValues.lng], 2);

      
    }
    else
    {

      if (this.locationMapValues.lat === 0 && this.locationMapValues.lng === 0)
      {
        this.map.setView([this.locationMapValues.lat, this.locationMapValues.lng], 2);
      }
      else
      {
        this.map.setView([this.locationMapValues.lat, this.locationMapValues.lng], 15);
      }
    }

    const tiles = L.tileLayer('https://tiles.wmflabs.org/hikebike/{z}/{x}/{y}.png', {
      maxZoom : 20,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      
    })

    tiles.addTo(this.map);

    if (this.markerGroup)
    {
      this.markerGroup.clearLayers();
    }

    if (this.locationMapValues.lat !== 0 && this.locationMapValues.lng !== 0)
    {

      let  DefaultIcon = {
        icon: L.icon({
          iconSize: [ 36, 46 ],
          iconAnchor: [ 13, 0 ],
          // specify the path here
          iconUrl: '../../assets/images/icon-location.svg'
       })
    };

      this.markerGroup = L.layerGroup().addTo(this.map);
      L.marker([this.locationMapValues.lat, this.locationMapValues.lng], DefaultIcon).addTo(this.markerGroup);
    }
  }
}
