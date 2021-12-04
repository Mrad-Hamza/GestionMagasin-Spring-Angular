import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { AddComponent } from './InvoiceController/add/add.component';
import { GetComponent } from './InvoiceController/get/get.component';
import { DeleteComponent } from './InvoiceController/delete/delete.component';
import { GetDetailsComponent } from './InvoiceController/get-details/get-details.component';
import { GetParentComponent } from './InvoiceController/get-parent/get-parent.component';
import { UpdateComponent } from './InvoiceController/update/update.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    AddComponent,
    GetComponent,
    DeleteComponent,
    GetDetailsComponent,
    GetParentComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
