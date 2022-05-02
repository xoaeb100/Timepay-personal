import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MemberListComponent } from "./member-list/member-list.component";
import { NewMemberMasterComponent } from "./new-member-master/new-member-master.component";
import { UdpateMemberComponent } from "./udpate-member/udpate-member.component";

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: MemberListComponent
            },
            {
                path: 'new-member',
                component: NewMemberMasterComponent
            },
            {
                path: 'update-member',
                component: UdpateMemberComponent
            }
        ],
    },
    {
        path: 'new-member',
        component: NewMemberMasterComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class MemberMasterRoutingModule { }