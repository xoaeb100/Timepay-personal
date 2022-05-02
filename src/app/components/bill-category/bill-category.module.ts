import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { BillCategoryRoutingModule } from './bill-category-routing.module';
import { CategoryHeadsComponent } from './category-heads/category-heads.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };


@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoryComponent,
    CategoryHeadsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    BillCategoryRoutingModule,
    NgxDropzoneModule,
    DropzoneModule,
    NgxDropzoneModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    },
  ],
})
export class BillCategoryModule { }
