import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../services/registration.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addbutton-data',
  templateUrl: './addbutton-data.component.html',
  styleUrl: './addbutton-data.component.scss'
})
export class AddbuttonDataComponent implements OnInit {

  constructor(
    private regform: FormBuilder,
    private registrationformservice: RegistrationService,
    private passsedvalue: MatDialogRef<AddbuttonDataComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.registrationform = this.regform.group({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      number: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
      dob: new FormControl('', [Validators.required]),
      courses: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      img: new FormControl('',),
      remarks: new FormControl('')

    })
  }
  date1 = new Date();
  year = this.date1.getUTCFullYear();
  month = this.date1.getUTCMonth() + 1;
  day = this.date1.getUTCDate();

  finalmonth: any;
  finalday: any;
  maxdate: any;

  reader = new FileReader();

  ngOnInit(): void {
    this.registrationform.patchValue(this.data);

    if (this.month < 10) {
      this.finalmonth = "0" + this.month;
    } else {
      this.finalmonth = this.month;
    }

    if (this.day < 10) {
      this.finalday = "0" + this.day;
    } else {
      this.finalday = this.day;
    }
    this.maxdate = this.year + "-" + this.finalmonth + "-" + this.finalday;

  }


  registrationform: FormGroup;

  get formcontrol(){
    return this.registrationform.controls;
  }

  courses: string[] = [
    'Aeronautic',
    'Automobile',
    'Civil',
    'Chemical',
    'Computer Science',
    'Electrical and Electronics',
    'Electronics and Communication',
    'Information and Technology',
    'Mechanical',
    'Mechatronics'

  ]

  submitform() {
    if (this.registrationform.valid) {
      if (this.data) {
        this.registrationformservice.updateFormData(this.data.id, this.registrationform.value).subscribe({
          next: (val: any) => {
            alert('Form Updated');
            this.passsedvalue.close(true);
          },
          error: (errdata) => {
            console.log(errdata);
          }
        })
      }
      else {
        this.registrationformservice.addFormData(this.registrationform.value).subscribe({
          next: (val: any) => {
            alert('Form Submitted');
            this.passsedvalue.close(true);
          },
          error: (errdata) => {
            console.log(errdata);
          }
        })
      }
    }
  }
  url = "../../../../../assets/profileimage.jpg";
  onSelect(event: any) {

    let imgtype = event.target.files[0].type;

    if (imgtype.match(/image\/*/)) {
      this.reader.readAsDataURL(event.target.files[0]);
      this.reader.onload = (event: any) => {
        this.url = event.target.result;
      }
    } else {
      alert('Invalid Image Type');
    }
  }

}
