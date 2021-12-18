import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  fournisseur!:Fournisseur[];

  FournisseurForm = new FormGroup(
		{
      
			firstName : new FormControl('' , [Validators.required, Validators.minLength(2)]),
			lastName : new FormControl('' , [Validators.required, Validators.minLength(2)]),
			email : new FormControl('' , [Validators.required, Validators.email] ),
			phone : new FormControl('' , [Validators.required, Validators.maxLength(8) , Validators.minLength(8)]),
      adresse : new FormControl('' , [Validators.required, Validators.minLength(6)])
		}
		)
    constructor(private service:FournisseurService,private router:Router,
      private _snackBar: MatSnackBar) { }


    ngOnInit(): void {
      this.service.fetchFournisseurs().subscribe(
        (t)=>{
          this.fournisseur=t;
        },
        (error)=>{
          console.log(error.status)
        }
      );
    }
    t:Fournisseur[]=[]
    GetMaxId()
    {
      let Max= 0; 
      let i = 0; 
      let n = this.t.length ;
      
      while(i<n)
      { 
        if(this.t[i].idFournisseur > Max)
        { 
            Max = this.t[i].idFournisseur;
        }
        else
        {i++;}
      }
      console.log("Max : "+Max);
      return Max+Number(1);
    }
  
    SaveFournisseur(data:Fournisseur)
    {
  
      //data.idFournisseur=this.GetMaxId(this.data);

      console.log(data.idFournisseur);
      this.service.addFournisseur(data).subscribe()
      this.router.navigateByUrl("Fournisseur/FournisseurHome/get");
      this._snackBar.open("Provider created successfully ");
    }
  
  
 
	

}