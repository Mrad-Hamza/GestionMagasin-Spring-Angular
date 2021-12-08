import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ImagesRayon } from 'src/app/Model/ImagesRayon';
import { Rayon } from 'src/app/Model/Rayon';
import { RayonService } from 'src/app/service/rayon.service';
import { NgImageSliderComponent } from 'ng-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgImageSliderService } from 'ng-image-slider';
import { imgCollection } from 'src/app/Model/imgCollection';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/material/dialog/dialog.component';
import { MatInputModule } from '@angular/material/input';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-rayon',
  templateUrl: './list-rayon.component.html',
  styleUrls: ['./list-rayon.component.css']
})
export class ListRayonComponent implements OnInit {
  r !: Rayon;
  sortBoolean : boolean = true;
  addClicked : Boolean = false;
  rayons ?: Rayon[];
  images ?: ImagesRayon[];
  searchTxt :any;

  constructor(public rayonService:RayonService,public route:Router,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.fetchRayonData()
  }

  fetchRayonData() {
    this.rayonService.getAll().subscribe(
      (d) => {
        this.rayons=d;
      },
      (error) => {
        console.log("aaaaaaaaaaerreur :(")
      }
    );
  }

  fetchImagesData(r:Rayon) {
    this.rayonService.getAllImages(r.idRayon).subscribe(
      (d) => {
        this.images=d;
      },
      (error) => {
        console.log("aaaaaaaaaaerreur :(")
      }
    );
  }


  navigateToDetail(rayon:Rayon) {
    console.log(rayon+"nnn")
    this.route.navigate(['/update/',rayon.idRayon])
  }
  addButtonClicked(){
    this.addClicked = !this.addClicked;
  }
  add(rayon:Rayon){
    this.rayonService.addRayon(rayon).subscribe(
      (d) => {

        this.fetchRayonData();
        console.log("succes ajout")
        this.dialog.open(DialogComponent, {data: {name:'Ajout avec succés !'}});
            },
      (error) => {
        console.log("erreur images :(")
      }
    );
  }
  delete(rayon:Rayon) {
    this.rayonService.deleteRayon(rayon.idRayon,rayon).subscribe(
      (d) => {
        this.fetchRayonData();
        console.log("succes delete");      },
      (error) => {
        console.log(error)
      }
    );
  }
  searchButton(r:NgForm) {
    this.rayonService.search(r.value.input).subscribe(
      (d) => {
        this.rayons=d;
        if (d.length==0) {
          this.dialog.open(DialogComponent, {data: {name:'Aucun Rayon Trouvé'}});
          this.fetchRayonData()
        }
     },
      (error) => {
        console.log("erreur recherche :(")
      }
    );
  }
  sort() {
    if (this.sortBoolean) {
      this.rayonService.sortASC().subscribe(
        (d) => {
          this.rayons=d;
       },
        (error) => {
          console.log("erreurASC  :(")
        }
      )
    }
    if (!this.sortBoolean) {
      this.rayonService.sortDESC().subscribe(
        (d) => {
          this.rayons=d;
       },
        (error) => {
          console.log("erreur desc :(")
        }
      )
    }
    this.sortBoolean=!this.sortBoolean
  }
  sortByProducts() {
    this.rayonService.sortByProducts().subscribe(
      (d) => {
        this.rayons=d;
     },
      (error) => {
        console.log("erreur images :(")
      }
    )
  }
  filterByPrice(price:NgForm){
    console.log(price.value)
    this.rayonService.filterByPrice(price.value.min,price.value.max).subscribe(
      (d) => {
        this.rayons=d;
     },
      (error) => {
        console.log("erreur filter price")
      }
    )
  }
  getRayonImages() {

  }
}
