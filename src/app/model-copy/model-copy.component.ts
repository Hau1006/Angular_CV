import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CustomvalidationService } from '../../../src/app/services/customvalidation.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-model-copy',
  templateUrl: './model-copy.component.html',
  styleUrls: ['./model-copy.component.scss']
})
export class ModelCopyComponent implements OnInit {
  closeResult = '';


  registerForm: FormGroup;
  submitted = false;

  private dialogRef: NgbModalRef;

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private customValidator: CustomvalidationService,
    private ngactivemodel: NgbActiveModal,
    public dataService: DataService,
  ) { }


  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: [this.dataService.User.name, Validators.required],
      // date: ['hahah', Validators.required],
      // phone: ['', Validators.compose([Validators.required, this.customValidator.NumberValidator()])],
      // address: ['', Validators.required],
      // fb: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required], this.customValidator.userNameValidator.bind(this.customValidator)],
      password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
    },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );


  }






  get registerFormControl() {
    return this.registerForm.controls;

  }


  onSubmit() {
    this.submitted = true
    // console.log("ter", typeof this.registerForm.get('name')?.value);
    // this.registerForm.get('name');
    // console.log(this.registerForm.value);
    // this.dataService.User.name === this.registerForm.get('name': string | (string | number)[]);


    if (this.registerForm.valid) {
      // alert('Form Submitted succesfully!!!\n Check the values in browser console.');

      this.dialogRef.close();

      // this.registerForm.value;
      this.dataService.User.name = this.registerForm.get('name')?.value
      this.registerForm.patchValue({
        name: this.registerForm.get('name')?.value,

      });
      console.table(this.dataService.User.name);
      this.registerForm.reset();



    }









    // cai nay khi xem xong thi app dung no muc dich no la gi ctrl + click 
    // this.submitted = true;
    // if (this.registerForm.valid) {
    //   // console.table(this.registerForm.value); 




    // }
  }
  open(content: any) {
    this.dialogRef = this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' })

  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}


