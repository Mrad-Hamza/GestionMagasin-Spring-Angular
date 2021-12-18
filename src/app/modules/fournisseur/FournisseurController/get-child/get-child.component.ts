import { Component, EventEmitter ,Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';
import { GetParentComponent } from '../get-parent/get-parent.component';

@Component({
  selector: 'app-get-child',
  templateUrl: './get-child.component.html',
  styleUrls: ['./get-child.component.css']
})
export class GetChildComponent implements OnInit {

  @Input() fournisseur!:Fournisseur;
  @Input() photoURL:any;

  @Output() notif= new EventEmitter<any>();
  @ViewChild(GetParentComponent) c!:GetChildComponent;
  
    constructor(private service:FournisseurService,private router:Router) { }
  
    

  ngOnInit(): void {
  }
  Delete()
  {
    this.notif.emit(this.fournisseur);

  }
  UpdateUser(id:number)
  {
    this.router.navigate(['Fournisseur/FournisseurHome/update',id])
  }
}
