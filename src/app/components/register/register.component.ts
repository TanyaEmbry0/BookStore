import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  modalReference?: NgbModalRef;

  registerForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    password: new FormControl('',[
      Validators.required,

    ]),
    rePass: new FormControl('',[
      Validators.required,])

  });


  constructor(private modalService: NgbModal,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalReference = this.modalService.open(content, {
      keyboard: false,
      backdrop: 'static',
      animation: true,
      windowClass: 'screen-30 slide-right',
    })
  }

  close(): void {
    this.modalReference?.close();
    this.registerForm.reset();
  }

  submitRegister(): void {
    if(this.registerForm.invalid){
      this.registerForm.markAllAsTouched();
      return;
    }

    //TODO  authentication service....

  }


}
