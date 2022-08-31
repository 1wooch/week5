import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../server/api.service';
import { UserModel } from './sign-up.model';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {
  formValue!:FormGroup;
  userModelObj:UserModel=new UserModel();
  constructor(private formbuilder:FormBuilder,private api
    :ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      username:[''],
      age:[''],
      Birthdate:[''],
      email:[''],
      password:[''],
      Valid:['']

    })
  }
  postUserInfo(){
    this.userModelObj.username=this.formValue.value.username;
    this.userModelObj.password=this.formValue.value.password;
    this.userModelObj.Birthdate=this.formValue.value.Birthdate;
    this.userModelObj.age=this.formValue.value.age;
    this.userModelObj.email=this.formValue.value.email;
    this.userModelObj.valid=this.formValue.value.Valid;
    alert(this.formValue.value.username);
    this.api.postUser(this.userModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Successful");
      this.formValue.reset(); //if the register successful-> reset the value in input box
        },
    err=>{
      alert("fk");
    })
  }
}
