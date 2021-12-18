import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Fournisseur } from 'src/app/modules/model/Fournisseur';
import { FournisseurService } from '../fournisseur.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
 
  id!:number;
  fournisseur !:Fournisseur;
  isLoading = true;
  @ViewChild('content') content!: ElementRef;  


 
  constructor(private route:ActivatedRoute, private service:FournisseurService,private router:Router) { }

  
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.GetAllFournisseur();

  }
  GetAllFournisseur()
  {
    this.service.fetchFournisseursById(this.id).subscribe((res:any)=>{
    console.log(res);

    this.fournisseur = res;

    this.isLoading = false;
    
  },
  (error)=>{
    console.log(error)
  
  });
}
 
  Delete(id:number)
  {
    this.service.deleteFournisseur(id).subscribe(()=>{},(error)=>{console.log(error)});
    console.log("----------------------------")
    this.router.navigateByUrl('/Fournisseur/FournisseurHome/getParent');
  }
  Update(id:number)
  {
    this.router.navigate(['/Fournisseur/FournisseurHome/update/',id])
  }
 
 

 
  
}
