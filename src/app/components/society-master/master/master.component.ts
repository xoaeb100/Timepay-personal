import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MustMatch } from 'src/app/shared/validations/passwordValidator';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { BrowserModule, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  //Archwizard Content
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  fourthFormGroup!: FormGroup;
  maxDate!: Date;
  showGstFields: boolean = false;
  select = ['Firefox']

  constructor( 
    private fb: FormBuilder,
    private toaster: ToastrService,
    private router: Router,
    private modalService: NgbModal,
    private title:Title
  ) { }

  ngOnInit(): void {

    this.title.setTitle("D K Devshthali Residence Welfare Association || Society Master @ Timepay 2.0")

    //Archwizard Content
     //Archwizard Content
     this.firstFormGroup = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      contactNumber: ['', Validators.required],
    });
    this.secondFormGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    },
    {
      validator: MustMatch('password', 'cnfPassword')
    });
    this.thirdFormGroup = this.fb.group({
      birthdate: ['', Validators.required],
      age: [''],
      hasPassport: ['', Validators.required],
    })
    this.fourthFormGroup = this.fb.group({
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
    })

  }

  public finish() {
    this.toaster.success('Successfully Done!')
  }

  //ck Editor
  public Editor = ClassicEditor;
  public onReady(editor:any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  OpenEditor(editormodal:any) {
    this.modalService.open(editormodal, { centered: true, size: 'lg' });
  }

  //Angular Editor
  public config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '50rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
  }

    //Quil Editors

  quillConfig = {
    //toolbar: '.toolbar',
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]

  }

  public config2: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 5,
    addRemoveLinks: true,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };
  
  Select2Open(select2Modal:any) {
    this.modalService.open(select2Modal,{ size: 'md'});
  }

  onGstChange(event: any){
    console.log(event.target.value);
    if(event.target.value === 'Yes'){
      this.showGstFields = true;
    }else{
      this.showGstFields = false;
    }    
  }
  
}
