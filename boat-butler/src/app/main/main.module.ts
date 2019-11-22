import { NgModule } from "@angular/core";
import { HeaderComponent } from "./main-components/header/header.component";
import { SidebarComponent } from "./main-components/sidebar/sidebar.component";
import { MainLayoutComponent } from "./main-components/main-layout.component";
import { ProposalsComponent } from "app/Proposal/proposal.component";
import { MaterialModule } from "app/material.module";
import { CommonModule } from "@angular/common";
import { NotificationComponent } from "./main-components/header/notification.component";
import { UserComponent } from "./main-components/header/user.component";
import { MainRoutingModule } from "./main.routing";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { InboxComponent } from './main-components/header/inbox.component';
import { ProposalTableComponent } from 'app/Proposal/Proposal_table/proposal_table.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MainLayoutComponent,
    ProposalsComponent,
    NotificationComponent,
    UserComponent,
    InboxComponent,
    ProposalTableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MainModule {}
