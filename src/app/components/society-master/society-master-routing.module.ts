import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MasterComponent } from "./master/master.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MasterComponent
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SocietyMasterRoutingModule { }