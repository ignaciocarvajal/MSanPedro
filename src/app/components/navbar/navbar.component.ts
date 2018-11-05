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
  constructor(
    @Inject(DOCUMENT) private document: Document,
    @ViewChild('target') private targetElement: ElementRef
  ) { }

  ngOnInit() { }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let targetPos= this.targetElement.nativeElement.offsetTop;
    let windowScrollPos = this.document.body.scrollTop;
    if (windowScrollPos > targetPos) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
