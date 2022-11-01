import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() {
    console.log('SidebarComponent - constructor');
  }

  ngOnInit(): void {
    console.log('SidebarComponent - ngOnInit');
  }

}
