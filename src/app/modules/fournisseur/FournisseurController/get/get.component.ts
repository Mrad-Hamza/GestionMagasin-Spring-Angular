import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrls: ['./get.component.css']
})
export class GetComponent implements OnInit {

  constructor(private service:FournisseurService,private router:Router,
    private _snackBar: MatSnackBar
    ) { }
  ListFournisseur !: Fournisseur[];
 
 
  ngOnInit(): void {
    this.GetAllFournisseur();
  }
  GetAllFournisseur()
  {console.log("getallFournisseurs");
    this.service.fetchFournisseurs().subscribe(
      (t)=>{
        console.log(t);
        
        this.ListFournisseur=t;
      },
      (error)=>{
        console.log(error.status)
      }
    );
  }
  
  Delete(id:number)
  {
    this.service.deleteFournisseur(id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.GetAllFournisseur();
  }
  Update(id:number)
  {
    this.router.navigate(['/Fournisseur/FournisseurHome/update/',id])
  }

}

