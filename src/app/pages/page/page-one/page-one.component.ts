import { Component, OnInit } from '@angular/core';
import { current } from '../../../dashbord/current/current';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  public home:string;

  constructor() { }

  ngOnInit() {
    current.home=window.localStorage.getItem('home');
    this.home=current.home;
  }

}
