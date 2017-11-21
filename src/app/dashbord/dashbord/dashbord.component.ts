import { Component, OnInit,HostListener } from '@angular/core';
import { current } from '../current/current';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  public data2:string='';
  public data1:string='';
  private tabs:Array<Window>=[];

  constructor() { }

  ngOnInit() {
    document.cookie='';
  }

  //Open all window of one event

  openInNewTabs(){
    current.home=this.data2;
    current.about=this.data1;
    document.cookie="user="+current.home;
    document.cookie="pass="+current.about;
    window.localStorage.setItem('home',current.home);
    window.localStorage.setItem('about',current.about);
    var win = ['pageOne','pageTwo'];
    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol+"//"+host+"/";
    var tabs = [];
    win.forEach(function(name){
      tabs.push(window.open(url+name,name,'',false)); 
    });
    tabs.push(window.open("http://localhost:3000",'RocketChat','',false));
    this.tabs=tabs;
    console.log(this.tabs);
    tabs[0].focus();
  }

  @HostListener('window:beforeunload',['$event'])
  CloseWindow(event){
    this.tabs.forEach(function(win){
      win.close();
    });
  }

  //Open window one by one

  // openInNewTabs(route:string){
  //   current.home=this.data;
  //   current.about=this.data1;
  //   window.localStorage.setItem('home',current.home);
  //   window.localStorage.setItem('about',current.about);
  //   console.log(current.about);
  //   var protocol = window.location.protocol;
  //   var host = window.location.host;
  //   var url = protocol+"//"+host+"/"+route;
  //   window.open(url,route,'',false);
  // }

}
