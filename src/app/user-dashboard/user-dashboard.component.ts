import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup} from '@angular/forms'
import { ApiService } from '../server/api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  formValue!:FormGroup;
  //userModelObj:UserModel=new UserModel();
  userData!:any;
  constructor(private formbuilder:FormBuilder,private api
    :ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formbuilder.group({
      userName:[''],
      Age:[''],
      Birthday:[''],
      Email:['']
    })
    this.getAllUser();
  }
  getAllUser(){
    this.api.getUser().subscribe(res=>{
      this.userData=res;
      console.log(res);
    })
  }


}
