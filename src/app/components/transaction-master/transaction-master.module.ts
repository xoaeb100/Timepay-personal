import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemberReceiptComponent } from './member-receipt/member-receipt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DropzoneConfigInterface, DropzoneModule, DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { TransactionMasterRoutingModule } from './transaction-master-routing.module';
import { MemberDebitNoteComponent } from './member-debit-note/member-debit-note.component';
import { MemberCreditNoteComponent } from './member-credit-note/member-credit-note.component';
import { MemberAdjustmentComponent } from './member-adjustment/member-adjustment.component';
import { OtherReceiptComponent } from './other-receipt/other-receipt.component';
import { PaymentVoucherComponent } from './payment-voucher/payment-voucher.component';
import { TermVoucherComponent } from './term-voucher/term-voucher.component';
import { GeneralVoucherComponent } from './general-voucher/general-voucher.component';
import { BankReconComponent } from './bank-recon/bank-recon.component';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };


@NgModule({
  declarations: [
    MemberReceiptComponent,
    MemberDebitNoteComponent,
    MemberCreditNoteComponent,
    MemberAdjustmentComponent,
    OtherReceiptComponent,
    PaymentVoucherComponent,
    TermVoucherComponent,
    GeneralVoucherComponent,
    BankReconComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    NgxDropzoneModule,
    DropzoneModule,
    TransactionMasterRoutingModule
  ]
})
export class TransactionMasterModule { }
