import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { take } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  modalReference?: NgbModalRef;
  registerForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      // Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    password: new FormControl('', [Validators.required]),
    rePass: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router, 
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
    this.registerForm.reset();
  }

  submitRegister(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    //authentication service....
    this.authenticationService
      .register(this.registerForm)
      .pipe(take(1))
      .subscribe({
        next: (response) => {
          this.close();
          this.router.navigate(['/catalog'])
        },
        error: (error) => {
          alert(error.error.message);
        },
      });
  }
}
