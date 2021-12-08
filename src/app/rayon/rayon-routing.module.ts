import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { DetailRayonComponent } from './detail-rayon/detail-rayon.component';
import { ListRayonComponent } from './list-rayon/list-rayon.component';
import { UpdateRayonComponent } from './update-rayon/update-rayon.component';

const routes: Routes = [
  {
    path: '',
    component: ListRayonComponent,
    children: [
      {
        path: 'rayons', component: ListRayonComponent,
      },
      {
        path:'updateRayon/:id',component:DetailRayonComponent
      },
      {
        path: 'add', component: AddRayonComponent
      },
    ]
  },
  {path:'update/:id', component:DetailRayonComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RayonRoutingModule { }
