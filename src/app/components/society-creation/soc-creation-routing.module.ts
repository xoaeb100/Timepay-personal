import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CreationComponent } from "./creation/creation.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CreationComponent
            },
        ],
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SocietyCreationRoutingModule { }