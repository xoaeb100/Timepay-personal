import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountMasterListComponent } from './account-master-list/account-master-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccountMasterRoutingModule } from './account-master-routing.module';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { GroupsComponent } from './groups/groups.component';
import { PrimaryGroupComponent } from './primary-group/primary-group.component';
import { MainComponent } from './main/main.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    AccountMasterListComponent,
    GroupsComponent,
    PrimaryGroupComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    AccountMasterRoutingModule,
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
export class AccountMasterModule { }
