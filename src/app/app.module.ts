import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { route } from './app.route';
import { AppComponent } from './app.component';
import { current } from './dashbord/current/current';
import { PageOneComponent } from './pages/page/page-one/page-one.component';
import { PageTwoComponent } from './pages/page/page-two/page-two.component';
import { DashbordComponent } from './dashbord/dashbord/dashbord.component';

@NgModule({
  declarations: [
    AppComponent,
    PageOneComponent,
    PageTwoComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [
    current
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }