import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { BadgeComponent } from './badge/badge.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ThumbnailsComponent } from './thumbnails/thumbnails.component';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ImagesComponent } from './images/images.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressComponent } from './progress/progress.component';
import { SpinnersComponent } from './spinners/spinners.component';
import { MediaobjectComponent } from './mediaobject/mediaobject.component';
import { TypographyComponent } from './typography/typography.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToastComponent } from './toast/toast.component';
import { TagsComponent } from './tags/tags.component';
import { TabsComponent } from './tabs/tabs.component';
import { ElementsRoutingModule } from './elements-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast/toast-container/toast-container.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';


@NgModule({
  declarations: [AlertsComponent, AvatarComponent, BreadcrumbsComponent, ButtonsComponent, BadgeComponent, DropdownComponent, ThumbnailsComponent, ListgroupComponent, NavigationComponent, ImagesComponent, PaginationComponent, PopoverComponent, ProgressComponent, SpinnersComponent, MediaobjectComponent, TypographyComponent, TooltipComponent, ToastComponent, TagsComponent, TabsComponent, ToastContainerComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    NgbModule,
    HighlightModule
  ],
  providers: [ 
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ElementsModule { }
