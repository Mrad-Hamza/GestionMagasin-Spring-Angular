import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rayon } from 'src/app/Model/Rayon';
import { ActivatedRoute } from '@angular/router';
import { RayonService } from 'src/app/service/rayon.service';
import { Images } from 'angular-responsive-carousel';
import { ImagesRayon } from 'src/app/Model/ImagesRayon';

@Component({
  selector: 'app-detail-rayon',
  templateUrl: './detail-rayon.component.html',
  styleUrls: ['./detail-rayon.component.css']
})
export class DetailRayonComponent implements OnInit {
  rayon!: Rayon
  id:any;
  updateEtat : boolean = false;
  powers: string[] = [];
  submitted: boolean = false;
  images : ImagesRayon[] = [];
  constructor(private route:ActivatedRoute,private service:RayonService) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id')!);
    this.fetchRayonData(this.id)
    this.fetchImagesData(this.id)
  }

  update(){
    this.updateEtat= !this.updateEtat;
  }
  delete() {
    this.service.deleteRayon(this.rayon.idRayon,this.rayon).subscribe();
  }

  onSubmit({  valid }: { valid: boolean }) {
    this.submitted = true;
  }
  fetchRayonData(idR : any) {
    this.service.getRayonById(idR).subscribe(
      (d) => {
        this.rayon=d;
        console.log(this.rayon)
        console.log("succes")
      },
      (error) => {
        console.log("erreur images :(")
      }
    )
  }
  fetchImagesData(id:number) {
    this.service.getAllImages(id).subscribe(
      (d) => {
        this.images=d;
        console.log(this.images)
        console.log("succes aa")
      },
      (error) => {
        console.log("erreur images :(")
      }
    )
  }
}
