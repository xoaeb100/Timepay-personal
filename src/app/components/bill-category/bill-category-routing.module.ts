import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCategoryComponent } from "./add-category/add-category.component";
import { CategoryHeadsComponent } from "./category-heads/category-heads.component";
import { CategoryListComponent } from "./category-list/category-list.component";


const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CategoryListComponent
            },
            {
                path: 'add-category',
                component: AddCategoryComponent
            },
            {
                path:'category-head',
                component: CategoryHeadsComponent
            }

        ],
        
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BillCategoryRoutingModule { }