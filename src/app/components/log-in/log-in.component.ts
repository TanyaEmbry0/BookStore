import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Subscription, take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent implements OnInit {
  modalReference?: NgbModalRef;
  subscription?: Subscription;
  loginForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
  });
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private authenticationService: AuthenticationService
  ) {}
  ngOnInit(): void {}
  open(content: any): void {
    this.modalReference = this.modalService.open(content, {
      keyboard: false,
      backdrop: 'static',
      animation: true,
      windowClass: 'screen-30 slide-right',
    });
  }
  close(): void {
    this.modalReference?.close();
    this.loginForm.reset();
  }
  submitLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.subscription = this.authenticationService
      .login(this.loginForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.close();
        },

        error: (error) => {
          alert(error.error.message);
        },
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.authenticationService.isUserLoggedIn();
  }
}
