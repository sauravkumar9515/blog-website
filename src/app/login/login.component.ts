import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    // this.loginForm = this.formBuilder.group({
    //   // email:[''],
    //   // password:['']
    // })
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
  get password() {
    return this.loginForm.get('password')
  }
  get email() {
    return this.loginForm.get('email')
  }

  login() {
    if(this.loginForm.status === 'VALID'){
      console.log(this.loginForm.value)
    }
    this.http.get<any>("http://localhost:3000/signupusers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        })
        console.log(user);
        if (user) {
          alert("Login Success!!");
          this.loginForm.reset();
          this.router.navigate(['/addpost'])
        } else {
          alert("user not found");
        }
      })
      
  }


}



