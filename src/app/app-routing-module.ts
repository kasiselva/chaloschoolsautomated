import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { FieldMasterComponent } from './field-master/field-master.component';
import { GroupMasterComponent } from './group-master/group-master.component';
import { TemplateMasterComponent } from './template-master/template-master.component';

const routes: Routes = [
    /*{ path: 'enquiry', component: EnquiryComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'form', component: ApplicationFormComponent },
    { path: 'success', component: SuccessComponent },*/
    { path: 'field', component: FieldMasterComponent },
    { path: 'group', component: GroupMasterComponent },
    { path: 'template', component: TemplateMasterComponent },
    { path: '', redirectTo: '/field', pathMatch: 'full' },
]
@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', paramsInheritanceStrategy: 'always' })],
    exports: [RouterModule],
    
})
export class AppRoutingModule { }