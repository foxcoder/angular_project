import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id:number;
  fullName:string;
  email:string;
  address:Address;
  hobbies:string[];
  post:any;

  constructor(private userService :UserService) {
     console.log("constructor");
     this.id=1;
     this.fullName="xiaofei xu";
     this.email="test@test.com";
     this.hobbies=["read book", "hiking"];
     this.address={
      street :"12",
      city:"23"
     };

    //  this.post={
    //   userId: 1,
    //   id: 1,
    //   title: "title",
    //   body: "boday"
    //  };

    this. userService.getPost().subscribe((p)=>{
       this.post=p;
     });
       
   }

  ngOnInit() {
    console.log("init()");
  }


   addOne(){
      this.id+=1;
   }

   addHobby(hobby:string){
     this.hobbies.push(hobby);
     return false;

   }
}


interface  Address {
   street: string;
   city:string ;
}


class Post  {
 constructor(public userId: number,
  public id: number,
  public title: string,
  public  body: string){}
}


