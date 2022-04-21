import { ContentObserver } from '@angular/cdk/observers';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { RegisterService } from '../MyService/register.service';
import { User } from '../user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})



export class RegisterationComponent implements OnInit {


  public selected : boolean= false;
  public techError : boolean= false;
  public techs = ["React", "Vue", "Angular"];
  // userModel = new User('Abhishek', "Vadhadiya", 9925177550, "Abcd123", "Abcd123", "a@a.com", "add1", "add2", "city1", false, "React");
  userModel = new User();

  constructor(private registerService: RegisterService) {  }

  ngOnInit(): void {
  }

  validateTechno(value: any){
    if(value === "default" || value == false){
      this.techError = true;
    }
    else{
      this.techError = false;
    }
  }

  onSubmit(){
    console.log(this.userModel);
    this.registerService.register(this.userModel)
    .subscribe(
      data => console.log('success! ',data),
      error => console.log('Error!! ',error)
    )
  }

}
