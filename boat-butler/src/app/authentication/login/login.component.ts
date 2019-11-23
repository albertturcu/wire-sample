import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'app/core/services/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  showErrorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.authenticationService.isLoggedIn);
    if (this.authenticationService.isLoggedIn) {
      this.router.navigate(['/proposals']);
    }
  }

  get f() { return this.loginForm.controls; }

  async login() {
    const res = await this.authenticationService.login(this.f.username.value, this.f.password.value);
    if(res!=='Unauthorized'){
      this.router.navigate(['/proposals']);
    }

    this.showErrorMessage = 'Invalid username or password! Please try again'
  }
}
