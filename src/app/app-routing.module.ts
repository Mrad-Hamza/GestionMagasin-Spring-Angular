import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  { path: 'Fournisseur', loadChildren: () => import('./modules/fournisseur/fournisseur.module').then(m => m.FournisseurModule) },
  
  {path:'**',component:NotFoundComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
