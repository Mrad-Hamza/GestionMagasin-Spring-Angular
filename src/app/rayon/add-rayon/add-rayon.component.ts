import { Component, OnInit ,Output, EventEmitter,Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rayon } from 'src/app/Model/Rayon';
import { RayonService } from 'src/app/service/rayon.service';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent implements OnInit {
  initialValue: Rayon = new Rayon;
  powers: string[] = [];
  submitted: boolean = false;

  @Output() rayon: EventEmitter<Rayon> = new EventEmitter<Rayon>();
  constructor(private service:RayonService) { }

  ngOnInit(): void {
  }

  submit(r:NgForm) {
    console.log("aaaaaaaaaaaaa")
    console.log(r.value)
    this.initialValue.libelleRayon=r.value.libelleRayon;
    this.initialValue.codeRayon=r.value.codeRayon;
    console.log(this.initialValue )
    console.log("test")
    this.rayon.emit(this.initialValue)
    console.log(this.initialValue + " on submit")
  }
}
