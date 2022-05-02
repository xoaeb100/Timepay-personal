import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document/document.component';
import { DocumentCentreRoutingModule } from './document-centre-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    DocumentCentreRoutingModule
  ]
})
export class DocumentCentreModule { }
