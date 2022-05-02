import { Routes } from '@angular/router';

//Route for content layout with sidebar, navbar and footer.

export const Full_Content_Routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('../../components/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
        path: 'society-creation',
        loadChildren: () => import('../../components/society-creation/society-creation.module').then(m => m.SocietyCreationModule)
    },
    {
        path: 'society-master',
        loadChildren: () => import('../../components/society-master/society-master.module').then(m => m.SocietyMasterModule)
    },
    {
        path: 'document-centre',
        loadChildren: () => import('../../components/document-centre/document-centre.module').then(m => m.DocumentCentreModule)
    },
    {
        path: 'member-master',
        loadChildren: () => import('../../components/member-master/member-master.module').then(m => m.MemberMasterModule)
    },
    {
        path: 'account-master',
        loadChildren: () => import('../../components/account-master/account-master.module').then(m => m.AccountMasterModule)
    },
    {
        path: 'bill-category',
        loadChildren: () => import('../../components/bill-category/bill-category.module').then(m => m.BillCategoryModule)
    },
    {
        path: 'bill-master',
        loadChildren: () => import('../../components/bill-master/bill-master.module').then(m => m.BillMasterModule)
    },
    {
        path: 'quick-actions',
        loadChildren: () => import('../../components/quick-action/quick-action.module').then(m => m.QuickActionModule)
    },
    {
        path: 'search-society',
        loadChildren: () => import('../../components/search-society/search-society.module').then(m => m.SearchSocietyModule)
    },
    {
        path: 'announcement',
        loadChildren: () => import('../../components/announcement-main/announcement-main.module').then(m => m.AnnouncementMainModule)
    },
    {
        path: 'bill-generation',
        loadChildren: () => import('../../components/bill-generation/bill-generation.module').then(m => m.BillGenerationModule)
    },
    {
        path: 'transaction-master',
        loadChildren: () => import('../../components/transaction-master/transaction-master.module').then(m => m.TransactionMasterModule)
    },
];
