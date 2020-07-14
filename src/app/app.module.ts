import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { PaymentComponent } from './payment/payment.component';
import { SuccessComponent } from './success/success.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { AppRoutingModule } from './app-routing-module';
import { FieldMasterComponent } from './field-master/field-master.component';
import { GroupMasterComponent } from './group-master/group-master.component';
import { TemplateMasterComponent } from './template-master/template-master.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';


/* service */
import { CommonService } from '../app/services/common.sevice';
import { AlertService } from '../app/services/alert.service';



@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    PaymentComponent,
    SuccessComponent,
    ApplicationFormComponent,
    FieldMasterComponent,   
    GroupMasterComponent,
    TemplateMasterComponent
  
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
  })
  ],
  providers: [
    CommonService,AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
