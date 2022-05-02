import { Component, ElementRef, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Menu, NavService } from 'src/app/shared/services/nav.service';
import { Subscription } from 'rxjs';
import { SidebarRightService } from 'src/app/shared/services/sidebar-right.service';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public menuItems!: Menu[];
  public url: any;

  layoutSubscription: Subscription;
  public isCollapsed = true;

  
  constructor(
    private router: Router,
    private navServices: NavService,
    public elRef: ElementRef,
    private sidebarRightservice: SidebarRightService,
  ) {
    this.navServices.items.subscribe(menuItems => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter(items => {
            if (items.path === event.url) {
              this.setNavActive(items);
            }
            if (!items.children) { return false; }
            items.children.filter(subItems => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) { return false; }
              subItems.children.filter(subSubItems => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
              return;
            });
            return;
          });
        }
      });
    });
    this.layoutSubscription = sidebarRightservice.changeEmitted.subscribe(
      direction => {
        const dir = direction.direction;

      }
    )
   }

   setNavActive(item:any) {
    this.menuItems.filter(menuItem => {
      if (menuItem !== item) {
        menuItem.active = false;
        let sidebarToggle:any = document.querySelector('.main-body')
        sidebarToggle.classList.remove('sidenav-toggled')
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    })
  }

  // Click Toggle menu
  toggleNavActive(item:any) {
    if (!item.active) {
      this.menuItems.forEach((a:any) => {
        if (this.menuItems.includes(item)) {
          a.active = false;
        }
        if (!a.children) { return false; }
        a.children.forEach((b:any) => {
          if (a.children.includes(item)) {
            b.active = false;
          }
        });
        return;
      });
    }
    item.active = !item.active;
  }

  ngOnInit(): void {

    let navbarForm:any = document.querySelector('.navbar-form')
    navbarForm.addEventListener('click',(event:any)=>{
      event.preventDefault();
      return;
    }, {passive: false})
  }

  toggleSidebarNotification() {
    this.sidebarRightservice.emitSidebarNotifyChange(true);
  }
  toggleSidebarOpen(){
    if ((this.navServices.collapseSidebar = true)) {
      let mainBody:any = document.querySelector('.main-body')
      mainBody.classList.add('sidenav-toggled');
    }
  }
  toggleSidebarClose(){
    if ((this.navServices.collapseSidebar = true)) {
      let removeMainBody:any = document.querySelector('.main-body')
      removeMainBody.classList.remove('sidenav-toggled');
    }
  }

  search(){
    let navabarForm:any = document.querySelector('.navbar-form ')
    navabarForm.classList.toggle('d-none')
  }
  close(){
    let navbarD:any = document.querySelector('.navbar-form ')
    navbarD.classList.add('d-none')
  }

  ngAfterViewInit(){
    
    const chat:any = document.querySelector('.chat-scroll');
    let ps1 = new PerfectScrollbar(chat,{
      wheelPropagation: false,
      wheelSpeed :2,
      suppressScrollX:true
    });

    const notification:any  = document.querySelector('.Notification-scroll');
    let ps2 = new PerfectScrollbar(notification,{
      wheelPropagation: false,
      wheelSpeed :2,
      suppressScrollX:true
    });
  }

}
