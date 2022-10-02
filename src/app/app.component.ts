import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ViewChildDemo';
  ParentName="Full Stack Developer28";
  @ViewChild(ChildComponent) child:ChildComponent|any;
 @ViewChild('Parent') Parent:ElementRef|any;
  ngOnInit(): void {
    
  }
  ngAfterViewInit()
  {
    console.log(this.child) ;
    console.log(this.Parent);
    this.Parent.nativeElement.style.backgroundColor="Yellow";
  }
  CalltochildComponentProperty()
  {
this.child.ChildName=this.ParentName;
  }
  CalltochildComponentButtonClick()
  {
this.child.GetAlert();
  }
}
