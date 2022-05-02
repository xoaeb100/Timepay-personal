import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgSelectConfig } from '@ng-select/ng-select';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  profileForm: FormGroup;
  

  selectValue:any = null;
  selectValues = [
    { value: 1, label: 'US English' },
    { value: 2, label: 'Arabic' },
    { value: 3, label: 'Korean' }
  ];

  select!: FormControl

  constructor(
    private config: NgSelectConfig,
    private fb: FormBuilder
  ) {
    this.profileForm = this.fb.group({
      select : [this.selectValue]
      
    })
  }

  ngOnInit(): void {
    this.selectValue = this.selectValues[0];
  }

}
