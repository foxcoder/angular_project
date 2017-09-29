import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import "rxjs/Rx";

@Injectable()
export class UserService {

  constructor(public http:Http) {
    console.log("User Service connected.");
   }

   getPost(){
    return  this.http.get("https://jsonplaceholder.typicode.com/posts/1").map(resp=>resp.json());
    
   }

}
