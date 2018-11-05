import {  Component, HostListener, Inject, OnInit, ViewChild,ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;

  

  sticky: boolean = false;
  constructor(  ) { }

  ngOnInit() { }

}
