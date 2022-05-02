import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GenerationComponent } from "./generation/generation.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: GenerationComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillingGenerationRoutingModule { }