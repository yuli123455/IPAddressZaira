import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-detail',
  templateUrl: './view-detail.component.html',
  styleUrls: ['./view-detail.component.sass']
})
export class ViewDetailComponent implements OnInit {

  @Input() dataLocation : any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
