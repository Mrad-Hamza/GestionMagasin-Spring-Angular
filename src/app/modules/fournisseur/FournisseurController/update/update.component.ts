import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private ac:ActivatedRoute,private service:FournisseurService,private router:Router,
    private _snackBar: MatSnackBar) { }

  fournisseur = new Fournisseur();
  id=this.ac.snapshot.params['id'];
  
  ngOnInit(): void {
    this.getFournisseur();
  }
 

  getFournisseur()
  {
    this.service.fetchFournisseursById(this.id).subscribe(
      (res:Fournisseur)=>
      {
        this.fournisseur=res;
        console.log(res.idFournisseur)
      },
      (error)=>{
        console.log(error)
      }
    );
  }

  UpdateFournisseur(data:Fournisseur){
    
    data.idFournisseur=this.id;
    this.service.UpdatFournisseur(data).subscribe()
    this.router.navigateByUrl("Fournisseur/FournisseurHome/detail/"+this.id);
    this._snackBar.open("Provider created successfully ");
  }
  

}
