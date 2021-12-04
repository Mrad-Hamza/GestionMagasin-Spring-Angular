import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRayonComponent } from './rayon/list-rayon/list-rayon.component';
import { DetailRayonComponent } from './rayon/detail-rayon/detail-rayon.component';
import { AddRayonComponent } from './rayon/add-rayon/add-rayon.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},//redirection vers login par defaut
  {path:'getRayons', component: ListRayonComponent},
  {path:'updateRayon/:id',component:DetailRayonComponent},
  {path:'addRayon',component:AddRayonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
