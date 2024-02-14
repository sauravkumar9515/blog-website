import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import{ FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { of } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  // [x: string]: any;
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http: HttpClient,private router: Router ){ }

  ngOnInit(): void {
  //   this.signupForm= this.formBuilder.group({
  //     'fname': [''],
  //     'lname': [''],
  //     'email': [''],
  //     'phone': [''],
  //     'password':['']
  // })
  this.signupForm = new FormGroup({
    fname: new FormControl('', Validators.required),
    lname: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}
  signup(){
    if(this.signupForm.status === 'VALID'){
      console.log(this.signupForm.value)
  }
    this.http.post<any[]>("http://localhost:3000/signupusers", this.signupForm.value)
    .subscribe(res=>{
      alert("Successfully signup");
      this.signupForm.reset();
      this.router.navigate(['/dashboard']);


    },err=>{
      alert("Something went wrong")
    })

  }
get fname(){
  return this.signupForm.get('fname');
} 
get lname(){
  return this.signupForm.get('lname');
} 
get email(){
  return this.signupForm.get('email');
} 
get phone(){
  return this.signupForm.get('phone');
} 
get password(){
  return this.signupForm.get('password');
} 


}
