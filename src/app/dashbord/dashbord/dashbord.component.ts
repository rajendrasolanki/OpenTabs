import { Component, OnInit } from '@angular/core';
import { current } from '../current/current';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {

  public data2:string='';
  public data1:string='';

  constructor() { }

  ngOnInit() {
  }

  //Open all window of one event

  openInNewTabs(){
    current.home=this.data2;
    current.about=this.data1;
    window.localStorage.setItem('home',current.home);
    window.localStorage.setItem('about',current.about);
    var win = ['pageOne','pageTwo'];
    var protocol = window.location.protocol;
    var host = window.location.host;
    var url = protocol+"//"+host+"/";
    win.forEach(function(name){
      window.open(url+name,name,'',false);
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
