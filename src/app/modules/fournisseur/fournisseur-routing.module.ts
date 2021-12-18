import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatsComponent } from 'src/app/stats/stats.component';
import { FournisseurComponent } from './fournisseur.component';
import { AddComponent } from './FournisseurController/add/add.component';
import { GetDetailsComponent } from './FournisseurController/get-details/get-details.component';
import { GetParentComponent } from './FournisseurController/get-parent/get-parent.component';
import { GetComponent } from './FournisseurController/get/get.component';
import { UpdateComponent } from './FournisseurController/update/update.component';

const routes: Routes = [
{path:'',redirectTo:'FournisseurHome',pathMatch:'full'},
{ 
  path: 'FournisseurHome', component: FournisseurComponent,
  children:[
            {path:"add", component:AddComponent},
            {path:'update/:id', component:UpdateComponent},
            {path:"get", component:GetComponent},
            {path:"getParent", component:GetParentComponent},
            {path:"detail/:id", component:GetDetailsComponent},
            {path :"stats",component:StatsComponent},
            ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FournisseurRoutingModule { }
