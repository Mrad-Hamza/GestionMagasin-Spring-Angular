import { Component, OnInit ,Output, EventEmitter,Input  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Rayon } from 'src/app/Model/Rayon';
import { RayonService } from 'src/app/service/rayon.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent implements OnInit {
  initialValue: Rayon = new Rayon;
  addForm !:  FormGroup ;

  @Output() rayon: EventEmitter<Rayon> = new EventEmitter<Rayon>();
  constructor(private service:RayonService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void{
    this.addForm = this.fb.group({
      libelleRayon:['',Validators.required],
      codeRayon:['',Validators.required]
    })
  }
  submit() {
    console.log(this.addForm.value.codeRayon)
    this.initialValue.libelleRayon=this.addForm.value.libelleRayon;
    this.initialValue.codeRayon=this.addForm.value.codeRayon;
    console.log(this.initialValue )
    console.log("test")
    this.rayon.emit(this.initialValue)
    console.log(this.initialValue + " on submit")
  }
}
