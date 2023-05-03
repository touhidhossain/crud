import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from '../services/employee.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent implements OnInit{

  empForm: FormGroup;

  education : string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ]

  constructor(private formBuilder: FormBuilder,
     private empService: EmployeeService,
      private dialogRef: MatDialogRef<EmpAddEditComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
       private coreService: CoreService) {
    this.empForm = this.formBuilder.group({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      dateOfBirth: '',
      gender: '',
      education: '',
      company: '',
      experience: '',
      packages: ''
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if(this.empForm.valid){
      if(this.data) {
        this.empService.updateEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Employee updated successfully.');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      } else {
        this.empService.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this.coreService.openSnackBar('Employee added successfully.');
            this.dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }

}
