import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FournisseurRoutingModule } from './fournisseur-routing.module';
import { FournisseurComponent } from './fournisseur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddComponent } from './FournisseurController/add/add.component';
import { UpdateComponent } from './FournisseurController/update/update.component';
import { DeleteComponent } from './FournisseurController/delete/delete.component';
import { GetComponent } from './FournisseurController/get/get.component';
import { GetParentComponent } from './FournisseurController/get-parent/get-parent.component';
import { GetChildComponent } from './FournisseurController/get-child/get-child.component';
import { GetDetailsComponent } from './FournisseurController/get-details/get-details.component';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    FournisseurComponent,
    AddComponent,
    UpdateComponent,
    DeleteComponent,
    GetComponent,
    GetParentComponent,
    GetChildComponent,
    GetDetailsComponent
  ],
  imports: [
    CommonModule,
    MatPaginatorModule,
    FournisseurRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule
  ,],
  providers: [
    { provide:MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2500}}
  ]
})
export class FournisseurModule { }
