import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MytaskComponent} from './components/mytask/mytask.component';
import {TaskviewComponent} from './components/taskview/taskview.component';
import {CaseinfoComponent} from './components/caseinfo/caseinfo.component';
import {AttachmentsComponent} from './components/attachments/attachments.component';
import {AuditTrailComponent} from './components/audit-trail/audit-trail.component';





const routes: Routes = [
  {path:'mytasks' , component : MytaskComponent},
  {path:'taskview', component : TaskviewComponent},
  {path:'caseinfo', component:CaseinfoComponent},
  {path : 'attachments', component:AttachmentsComponent},
  {path : 'audittrail', component:AuditTrailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
