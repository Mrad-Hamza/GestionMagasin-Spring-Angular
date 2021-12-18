import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-get-parent',
  templateUrl: './get-parent.component.html',
  styleUrls: ['./get-parent.component.css']
})
export class GetParentComponent implements OnInit {

  constructor(private service:FournisseurService,private router:Router) { }
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


  executes(i:any){
    this.service.deleteFournisseur(i.id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.GetAllFournisseur();
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
