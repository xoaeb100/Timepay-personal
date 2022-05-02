import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BillMasterListComponent } from "./bill-master-list/bill-master-list.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: BillMasterListComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingMasterRoutingModule { }