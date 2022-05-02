import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

//Menu Bar
export interface Menu {
  headTitle?: string;
  title?: string;
  path?: string;
  icon?: string;
  type?: string;
  badgeClass?: string;
  badgeValue?: string;
  active?: boolean;
  children?: Menu[];
}


@Injectable({
  providedIn: 'root'
})
export class NavService implements OnDestroy {

  private unsubscriber: Subject<any> = new Subject();
  public screenWidth: BehaviorSubject<number> = new BehaviorSubject(window.innerWidth);

  public megaMenu: boolean = false;
  public megaMenuCollapse: boolean = window.innerWidth < 1199 ? true : false;
  public collapseSidebar: boolean = window.innerWidth < 991 ? true : false;

  constructor(
    private router: Router
  ) {
    this.setScreenWidth(window.innerWidth);
    fromEvent(window, 'resize').pipe(
      debounceTime(1000),
      takeUntil(this.unsubscriber)
    ).subscribe((evt: any) => {
      this.setScreenWidth(evt.target.innerWidth);
      if (evt.target.innerwidth < 991) {
        this.collapseSidebar = false;
        this.megaMenu = false;
      }

      if (evt.target.innerWidth < 1199) {
        this.megaMenuCollapse = true;
      }
    });
    if (window.innerWidth < 991) {
      this.router.events.subscribe(event => {
        this.collapseSidebar = false;
        this.megaMenu = false;
      })
    }
  }

  private setScreenWidth(width: number): void {
    this.screenWidth.next(width);
  }

  ngOnDestroy() {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  MENUITEMS: Menu[] = [
    {
      headTitle: 'Main Navigation'
    },
    {
      path: '/dashboard', title: 'Dashboard', type: 'link', icon: 'dashboard', active: true,
    },
    {
      path: '/society-creation', title: 'Society Creation', type: 'link', icon: 'assessment', active: true,
    },
    {
      path: '/society-master', title: 'Society Master', type: 'link', icon: 'layers', active: true,
    },
    {
      path: '/member-master', title: 'Member Master', type: 'link', icon: 'account_circle', active: true,
    },
    // {
    //   path: '/account-master', title: 'Account Master', type: 'link', icon: 'widgets', active: true,
    // },
    {
      title: 'Account Master', icon: 'widgets', type: 'sub', active: true,
      children: [
        { path: '/account-master/groups', title: 'Groups', type: 'link', active: false },
        { path: '/account-master/primary-group', title: 'Primary Group', type: 'link', active: false },
        { path: '/account-master/secondary-groups', title: 'Secondary Group', type: 'link', active: false },
        // { path: '/account-master/main', title: 'Accounts', type: 'link', active: false },
      ]
    },
    {
      title: 'Collection Master', icon: 'dns', type: 'sub', active: true,
      children: [
        { path: '/bill-category', title: 'Bill Category', type: 'link', active: false },
        { path: '/bill-master', title: 'Bill Master', type: 'link', active: false },
        { path: '/bill-generation', title: 'Bill Generation', type: 'link', active: false },
      ]
    },
    {
      title: 'Transaction Master', icon: 'dns', type: 'sub', active: true,
      children: [
        { path: '/transaction-master/member-receipt', title: 'L1 - Member Receipt', type: 'link', active: false },
        { path: '/transaction-master/member-debit-note', title: 'L1 - Member Debit Note', type: 'link', active: false },
        { path: '/transaction-master/member-credit-note', title: 'L1 - Member Credit Note', type: 'link', active: false },
        { path: '/transaction-master/member-adjustment', title: 'L1 - Member Adjustment', type: 'link', active: false },
        { path: '/transaction-master/other-receipt', title: 'L2 - Other Receipts', type: 'link', active: false },
        { path: '/transaction-master/payment-voucher', title: 'L2 - Payment Voucher', type: 'link', active: false },
        { path: '/transaction-master/term-voucher', title: 'L2 - Term Voucher', type: 'link', active: false },
        { path: '/transaction-master/general-voucher', title: 'L2 - General Voucher', type: 'link', active: false },
        { path: '/transaction-master/bank-recon', title: 'L3 - Bank Reconcilation', type: 'link', active: false },
      ]
    },
    // {
    //   path: '/bill-category', title: 'Bill Category', type: 'link', icon: 'dns', active: true,
    // },
    // {
    //   path: '/bill-master', title: 'Bill Master', type: 'link', icon: 'description', active: true,
    // },
    {
      path: '/announcement', title: 'Announcement', type: 'link', icon: 'notifications', active: true,
    },
    {
      path: '/document-centre', title: 'Document Centre', type: 'link', icon: 'table_chart', active: true,
    },
    {
      path: '/quick-actions', title: 'Quick Actions', type: 'link', icon: 'camera', active: true,
    },
    {
      path: '/search-society', title: 'Search Society', type: 'link', icon: 'keyboard', active: true,
    },
    // {
    //   title: 'Charts', icon: 'assessment', type: 'sub', active: false,
    //   children: [
    //     { path: '/charts/apex', title: 'Apex Chart', type: 'link', active: false },
    //     { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link', active: false },
    //     { path: '/charts/chartlist', title: 'Chartlist Chart', type: 'link', active: false },
    //     { path: '/charts/echarts', title: 'Echart Chart', type: 'link', active: false },
    //   ]
    // }
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);

}


