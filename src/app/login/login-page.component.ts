import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {User} from '../shared/component/interface';
import {AuthServices} from './auth.services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  form!: FormGroup;
  message!: string;
  email!: string;

  constructor(
    public auth: AuthServices,
    private router: Router,
    private route: ActivatedRoute
    // private postsService: PostsService
  ) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    // this.route.queryParams.subscribe((params: Params) => {
    //   if (params.loginAgain) {
    //     this.message = 'Потрібно увійти';
    //   }
    // });
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  // tslint:disable-next-line:typedef
  submit() {
    if (this.form.invalid) {
      return;
    }
    const user: User = {
      password: this.form.value.password,
      email: this.form.value.email
    };
    // this.postsService.addUserBb(reg).subscribe(() => {
    //   this.form.reset();
    // });
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      sessionStorage.setItem('loggedUser', user.email);
      this.router.navigate(['/home']);
    });
  }
}
