import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-storage-description-widget',
  templateUrl: './storage-description-widget.component.html',
  styleUrls: ['./storage-description-widget.component.css']
})
export class StorageDescriptionWidgetComponent implements OnInit {

  @Input ()
  storageObject: any;
  
  public makeLocationHeading = false;
  constructor() { }

  ngOnInit(): void {
    if(this.storageObject.title == ""){
      this.makeLocationHeading = true;
    }
  }

}
