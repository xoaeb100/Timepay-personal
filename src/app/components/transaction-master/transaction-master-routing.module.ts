import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BankReconComponent } from "./bank-recon/bank-recon.component";
import { GeneralVoucherComponent } from "./general-voucher/general-voucher.component";
import { MemberAdjustmentComponent } from "./member-adjustment/member-adjustment.component";
import { MemberCreditNoteComponent } from "./member-credit-note/member-credit-note.component";
import { MemberDebitNoteComponent } from "./member-debit-note/member-debit-note.component";
import { MemberReceiptComponent } from "./member-receipt/member-receipt.component";
import { OtherReceiptComponent } from "./other-receipt/other-receipt.component";
import { PaymentVoucherComponent } from "./payment-voucher/payment-voucher.component";
import { TermVoucherComponent } from "./term-voucher/term-voucher.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'member-receipt',
                component: MemberReceiptComponent
            },
            {
                path: 'member-debit-note',
                component: MemberDebitNoteComponent
            },
            {
                path: 'member-credit-note',
                component: MemberCreditNoteComponent
            },
            {
                path: 'member-adjustment',
                component: MemberAdjustmentComponent
            },
            {
                path: 'other-receipt',
                component: OtherReceiptComponent
            },
            {
                path: 'payment-voucher',
                component: PaymentVoucherComponent
            },
            {
                path: 'term-voucher',
                component: TermVoucherComponent
            },
            {
                path: 'general-voucher',
                component: GeneralVoucherComponent
            },
            {
                path: 'bank-recon',
                component: BankReconComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TransactionMasterRoutingModule { }