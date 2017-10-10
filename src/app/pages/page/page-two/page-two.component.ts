import { Component, OnInit } from '@angular/core';
import { current } from '../../../dashbord/current/current';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  public about:string;

  constructor() { }

  ngOnInit() {
    current.about=window.localStorage.getItem('about');
    this.about=current.about;
  }

}
