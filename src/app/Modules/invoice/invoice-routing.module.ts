import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './invoice.component';
import { AddComponent } from './InvoiceController/add/add.component';
import { GetDetailsComponent } from './InvoiceController/get-details/get-details.component';
import { GetParentComponent } from './InvoiceController/get-parent/get-parent.component';
import { GetComponent } from './InvoiceController/get/get.component';
import { UpdateComponent } from './InvoiceController/update/update.component';

const routes: Routes = [
 
  {path:'',redirectTo:'InvoiceHome',pathMatch:'full'},
  { 
    path: 'InvoiceHome', component: InvoiceComponent,
    children:[
              {path:"add", component:AddComponent},
              {path:'update/:id', component:UpdateComponent},
              {path:"get", component:GetComponent},
              {path:"getParent", component:GetParentComponent},
              {path:"detail/:id", component:GetDetailsComponent}
              ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
