import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillMasterListComponent } from './bill-master-list/bill-master-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { BillingMasterRoutingModule } from './bill-master-routing.module';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    BillMasterListComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BillingMasterRoutingModule,
    NgxDropzoneModule,
    DropzoneModule,
    CKEditorModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
  ],
})
export class BillMasterModule { }
