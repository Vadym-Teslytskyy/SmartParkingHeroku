import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import {ParkingService} from "../../parking.service";
import {SpotStatistic} from '../../model/view/spotstatistic';
import {Observable} from 'rxjs/Observable';
import {Chart} from 'chart.js';






@Component({
  selector: 'app-spotstatistic',
  templateUrl: './spotstatistic.component.html',
  styleUrls: ['./spotstatistic.component.css']
})
export class SpotstatisticComponent implements OnInit {

 
  statistic: SpotStatistic[];

 
  thirtySecInterval: number = 3000;
  favoriteNameInputHide: boolean = true;
  minDate: Date;
  maxDate: Date;
  tempDate: Date;
  minMonth: number;
  maxMonth: number;
 
   start_date:string;
   end_date:string;
  hoursChart = [];
  eventsChart = [];
 numbers: number[];
 hours: number[];
 events: number[];


  

 constructor(
   private route: ActivatedRoute,
   private router: Router,
    private parkingService: ParkingService,
   
  ) { 
  this.minDate = new Date();
  this.minDate.setDate(this.minDate.getDate()-7);
  this.maxDate = new Date();
  this.minMonth = this.minDate.getMonth()+1;
  this.maxMonth = this.maxDate.getMonth()+1;
  this.route.queryParams.subscribe(params => {
  this.start_date = params[this.minDate.getDate()+"/"+ this.minMonth+"/"+this.minDate.getFullYear()];
  this.end_date = params[this.maxDate.getDate()+"/"+this.maxMonth+"/"+this.maxDate.getFullYear()];
});
  
   /* this.param1 = params['param1'];
    this.param2 = params['param2'];*/

  
    }

   


 ngOnInit() {
   
    
   this.getSpotStatistic();
  this.fillArraysToGraphic();
   setInterval(this.refresh(), this.thirtySecInterval);
  // this.drawGraphic();
 }

 refresh(): void {
      this.getSpotStatistic();
      
 }


 fillArraysToGraphic(): void
 {
  this.numbers= []
  this.statistic.forEach( (element) => {
    console.log(element.id);
      this.numbers.push(element.id);
      
  });
  this.hours= []
  this.statistic.forEach( (element) => {
     console.log(element.numberOfHours);
     this.hours.push(element.numberOfHours);
     });
  this.hours.push(0);  
  this.events= []
  this.statistic.forEach( (element) => {
      console.log(element.numberOfEvents);
     this.events.push(element.numberOfEvents);
     });
  this.events.push(0);  


 }

drawHourGraphic(): void {
  var densityData = {
    label: 'Spots',
    data: this.hours
  };
 

 this.hoursChart = new Chart('canvas', {
  type: 'bar',
  data: {
    labels: this.numbers,
    datasets:[densityData]
     },
  options: {
    legend: {
      display: true
    },
    title: {
      display: true,
      text: 'How many hours spots of this parking have been taken'
    },
    scales: {
      xAxes: [{
        display: true
      }],
      yAxes: [{
        display: true
      }],
    }
  }
});  

this.numbers = null;
this.hours = null;
this.events = null;

}


drawEventGraphic(): void {

  var densityData = {
    label: 'Spots',
    data: this.events
  };
 

  this.eventsChart = new Chart('canvas', {
   type: 'bar',
   data: {
     labels: this.numbers,
     datasets:[densityData]
   },
   options: {
     legend: {
       display: true,
       text: 'Whi'
     },
     title: {
       display: true,
       text: 'Which spots are most popular'
     },
     scales: {
       xAxes: [{
         display: true
       }],
       yAxes: [{
         display: true
       }],
     }
   }
 });  
 
 this.numbers = null;
 this.hours = null;
 this.events = null;
 
 }

 getSpotStatistic(): void{
  const id = parseInt(this.route.snapshot.paramMap.get('id'));
  
  this.minDate.getMilliseconds();
  this.parkingService.getSpotStatistic(id,
    this.minDate.getTime().toString(), this.maxDate.getTime().toString())
    .subscribe(statistic => this.statistic = statistic);
    
}




 addItem() {
  this.route.queryParams.subscribe(params => {
    this.start_date =this.minDate.getDate()+"/"+ this.minMonth+"/"+this.minDate.getFullYear();
    this.end_date = this.maxDate.getDate()+"/"+this.maxMonth+"/"+this.maxDate.getFullYear();
 //   this.start_date = params['param1'];//"[this.minDate.getDate()+"/"+ this.minMonth+"/"+this.minDate.getFullYear()]";
    //this.end_date = params['param2'];//[this.maxDate.getDate()+"/"+this.maxMonth+"/"+this.maxDate.getFullYear()];
  });
   if(this.minDate > this.maxDate)
   {
    this.tempDate = this.minDate;
    this.minDate = this.maxDate;
    this.maxDate = this.tempDate;
   }
   
  this.getSpotStatistic();   
   
}


 showHoursGraphic()
 {
  this.fillArraysToGraphic();
  this.drawHourGraphic();
 }


 showEventsGraphic()
 {
  this.fillArraysToGraphic();
  this.drawEventGraphic();
 }

 returnToParkingDetail() {
  const id = parseInt(this.route.snapshot.paramMap.get('id'));
  this.router.navigate(['parkingdetail/'+id]);
}


}


