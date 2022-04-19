import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalRef } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  modalReference?: NgbModalRef;


  loginForm = this.fb.group({
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('/[a-zA-Z]+\@[a-zA-Z]+\.[a-zA-Z]+/g')
    ]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),

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
    this.loginForm.reset();
  }

  submitLogin(): void {
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
      return;
    }

    //TODO  authentication service....

  }



}
