import { Component, OnInit } from '@angular/core';
import { RayonService } from 'src/app/service/rayon.service';
import { Rayon } from 'src/app/Model/Rayon';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  search !: string;
  rayons ?: Rayon[];
  addClicked = false;
  constructor(public rayonService:RayonService) { }

  ngOnInit(): void {
    this.fetchRayonData();
  }

  fetchRayonData(){
    this.rayonService.getAll().subscribe(
      (d) => {
        this.rayons=d;
        console.log(d)
      },
      (error) => {
        console.log("erreur :(")
      }
    );
  }
  addButton(){
    this.addClicked=!this.addClicked;
  }


}
