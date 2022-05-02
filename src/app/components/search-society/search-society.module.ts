import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SearchSocietyMasterRoutingModule } from './search-society-routing-module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };


@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgxDropzoneModule,
    DropzoneModule,
    CKEditorModule,
    SearchSocietyMasterRoutingModule
    
  ]
})
export class SearchSocietyModule { }
