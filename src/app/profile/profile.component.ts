import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  today: Date = new Date();
  exper: string = '2 years 10 months';
  startDate :Date  = new Date(2016, 8, 1);


  start_mont:number= (this.startDate.getMonth()+1);
 start_year:number= (this.startDate.getFullYear());

current_mont:number= (this.today.getMonth()+1);
current_year:number= (this.today.getFullYear());
completedate:string="";

  year: number ;
  month:number ;
  
  constructor() { }
  ngOnInit() {
    if(this.start_mont>this.current_mont){
      this.year=(this.current_year-this.start_year-1);
      this.month=(12-this.start_mont)+this.current_mont;
      this.completedate=this.year +" year "+ this.month +" month";
      }else{
        this.year=(this.current_year-this.start_year);
      if(this.start_mont==this.current_mont){
        this.completedate=this.year+" year";
      }else{   
      this.completedate=this.year +" year "+(this.current_mont-this.start_mont)+" month ";
      }
      }
  }

  

}
