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
  imgObject :any;
  omgObj:any;
  constructor(public rayonService:RayonService,public route:Router,private dialog : MatDialog) { }

  ngOnInit(): void {
    this.fetchRayonData()
    this.fetchImagesData()
    this.ngImage()
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
  fetchImagesData() {
    this.rayonService.getAllImages().subscribe(
      (d) => {
        this.images=d;
        console.log(this.images)
        console.log("succes")
      },
      (error) => {
        console.log("erreur images :(")
      }
    );
  }
  ngImage() {
    this.imgObject=[];
    this.images?.forEach(image => {
      this.omgObj.image="./assets/images/"+image.imageRayon;
      this.omgObj.thumbImage="./assets/images/"+image.imageRayon;
      console.log("aa"+this.omgObj)
      this.imgObject.push(this.omgObj)
    })
    console.log(this.imgObject)
  }

  navigateToDetail(rayon:Rayon) {
    console.log(rayon+"nnn")
    this.route.navigate(['/updateRayon',rayon.idRayon])
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
        console.log("erreur images :(")
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
        console.log("erreur images :(")
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
          console.log("erreur images :(")
        }
      )
    }
    if (!this.sortBoolean) {
      this.rayonService.sortDESC().subscribe(
        (d) => {
          this.rayons=d;
       },
        (error) => {
          console.log("erreur images :(")
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


}
