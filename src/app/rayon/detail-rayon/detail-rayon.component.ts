import { Component, OnInit,Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rayon } from 'src/app/Model/Rayon';
import { ActivatedRoute } from '@angular/router';
import { RayonService } from 'src/app/service/rayon.service';

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
  constructor(private route:ActivatedRoute,private service:RayonService) { }

  ngOnInit(): void {
    this.id=parseInt(this.route.snapshot.paramMap.get('id')!);
    this.fetchRayonData(this.id)
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
}
