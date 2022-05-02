import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerationComponent } from './generation/generation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { BillingGenerationRoutingModule } from './bill-generation-routing.module';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    GenerationComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BillingGenerationRoutingModule,
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
export class BillGenerationModule { }
