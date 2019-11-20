import { NgModule } from '@angular/core';
import { HeaderComponent } from './main-components/header/header.component';
import { SidebarComponent } from './main-components/sidebar/sidebar.component';
import { MainLayoutComponent } from './main-components/main-layout.component';
import { ProposalsComponent } from 'app/Proposal/proposal.component';
import { MaterialModule } from 'app/material.module';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './main-components/header/notification.component';
import { UserComponent } from './main-components/header/user.component';
import { MainRoutingModule } from './main.routing';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    ProposalsComponent,
    NotificationComponent,
    UserComponent,
  ],
  imports: [CommonModule, MaterialModule, MainRoutingModule]
})
export class MainModule {}