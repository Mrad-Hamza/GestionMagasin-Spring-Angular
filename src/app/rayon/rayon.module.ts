import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RayonRoutingModule } from './rayon-routing.module';
import { AddRayonComponent } from './add-rayon/add-rayon.component';
import { DetailRayonComponent } from './detail-rayon/detail-rayon.component';
import { ListRayonComponent } from './list-rayon/list-rayon.component';
import { UpdateRayonComponent } from './update-rayon/update-rayon.component';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';
import { CarouselModule, WavesModule } from 'angular-bootstrap-md'



@NgModule({
  declarations: [
    AddRayonComponent,
    DetailRayonComponent,
    ListRayonComponent,
    UpdateRayonComponent,

  ],
  imports: [
    CommonModule,
    RayonRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSliderModule,
    CarouselModule,
    WavesModule
  ]
})
export class RayonModule { }
