import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewMemberMasterComponent } from './new-member-master/new-member-master.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberMasterRoutingModule } from './member-master-routing.module';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { MemberListComponent } from './member-list/member-list.component';
import { UdpateMemberComponent } from './udpate-member/udpate-member.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    NewMemberMasterComponent,
    MemberListComponent,
    UdpateMemberComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    MemberMasterRoutingModule,
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
export class MemberMasterModule { }
