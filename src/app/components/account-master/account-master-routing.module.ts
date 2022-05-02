import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccountMasterListComponent } from "./account-master-list/account-master-list.component";
import { GroupsComponent } from "./groups/groups.component";
import { MainComponent } from "./main/main.component";
import { PrimaryGroupComponent } from "./primary-group/primary-group.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'groups',
                component: GroupsComponent
            },
            {
                path: 'primary-group',
                component: PrimaryGroupComponent
            },
            {
                path: 'secondary-groups',
                component: AccountMasterListComponent
            },
            {
                path: 'main',
                component: MainComponent
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AccountMasterRoutingModule { }