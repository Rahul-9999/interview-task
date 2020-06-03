import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MytaskComponent } from './components/mytask/mytask.component';
import {FormsModule} from '@angular/forms';
import { TaskviewComponent } from './components/taskview/taskview.component';
import { CaseinfoComponent } from './components/caseinfo/caseinfo.component';
import { AttachmentsComponent } from './components/attachments/attachments.component';
import { AuditTrailComponent } from './components/audit-trail/audit-trail.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MytaskComponent,
    TaskviewComponent,
    CaseinfoComponent,
    AttachmentsComponent,
    AuditTrailComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
