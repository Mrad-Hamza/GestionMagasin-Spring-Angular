import { Component, OnInit } from '@angular/core';
import { GoogleChartInterface, GoogleChartType } from 'ng2-google-charts';
import { FournisseurService } from '../modules/fournisseur/FournisseurController/fournisseur.service';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  public pieChart: GoogleChartInterface = {
    chartType: GoogleChartType.PieChart,
    dataTable:[
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],

    ],
    //firstRowIsData: true,
    options: {'title': 'Tasks'},
  };
  constructor(private service:FournisseurService) { }
  
  ArrayList:any=[]
  ArrayList2:any=['Task', 'Hours per Day']
  getNbOrdersbyCountry()
  {
    console.log("getnb");
    this.service.getNbOrdersByCountry().subscribe(
      (t)=>{
        console.log(t);
        
        this.pieChart.dataTable=t;
        this.pieChart.dataTable[0]=this.ArrayList2;
      },
      
      (error)=>{
        console.log(error.status)
      }
    );
  }

  ngOnInit(): void {

  this.getNbOrdersbyCountry()
 
   
 }

}
