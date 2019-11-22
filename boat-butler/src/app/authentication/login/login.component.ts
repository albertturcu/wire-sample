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
  error: '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    console.log(this.authenticationService.isLoggedIn);
    if (this.authenticationService.currentUserValue()) {
      this.router.navigate(['/proposals']);
    }
  }

  get f() { return this.loginForm.controls; }

  login() {
    if (this.loginForm.invalid) {
        return;
    }
    this.authenticationService.login(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              if(data){
                this.router.navigate(['/proposals']);
              }
            },
            error => {
                this.error = error;
            });
    this.router.navigate(['/proposals']);
  }
}
