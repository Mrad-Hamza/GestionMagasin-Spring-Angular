import { Component, OnInit, Input, NgModule } from '@angular/core';
import { Rayon } from 'src/app/Model/Rayon';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RayonService } from 'src/app/service/rayon.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/material/dialog/dialog.component';


@Component({
  selector: 'app-update-rayon',
  templateUrl: './update-rayon.component.html',
  styleUrls: ['./update-rayon.component.css']
})
export class UpdateRayonComponent implements OnInit {
  @Input() rayon !: Rayon
  powers: string[] = [];
  submitted: boolean = false;
  constructor(private serviceRayon:RayonService,private dialog:MatDialog) { }

  ngOnInit(): void {
    console.log(this.rayon.idRayon,this.rayon.libelleRayon)
  }
  onSubmit() {

    this.serviceRayon.updateRayon(this.rayon,this.rayon.idRayon).subscribe(
      (d) => {
        this.dialog.open(DialogComponent, {data: {name:'Update avec succés !'}});
      },
      (error) => {
        console.log(this.rayon)
        console.log(error)

      }
    )
    console.log(this.rayon)
    console.log("testtest")
  }
}
