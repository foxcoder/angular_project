import { UserService } from './services/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {Routes, RouterModule} from "@angular/router";

const routes: Routes =[
{path:'', component:UserComponent},
{path:'search', component:UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    
    RouterModule.forRoot(routes, {useHash: true})
    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
