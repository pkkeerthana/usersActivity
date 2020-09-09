import { Component, OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  title = 'UserActivity';
  activity_periods=[];
  noActivity:boolean = true;
  users:any;
  showModal:boolean = false;
  date:any;
  required_timings = [];
  day:any;
  month:any;
  year:any;
  constructor(
    private dataService: DataService
  ){}

  events: string[] = [];

  ngOnInit(){
    this.dataService.postuser().subscribe(resdata => {
      console.log(resdata);
    });
    this.dataService.getUser().subscribe(resData => {
      this.users = resData['members'];
      console.log(this.users);
    });
  }

  LoaduserActivity(id:number){
    this.activity_periods = this.users[id].activity_periods;
    this.showModal = true;
    this.required_timings = [];
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
   this.noActivity = true;
   let date1 = new Date(event.value);
   let day1 = date1.getDay();
   this.required_timings = [];
   for(let each of this.activity_periods){
     let date3 = new Date(each.start_time)
     let day2 = date3.getDay();
     let time_diff = (date1.getTime() - date3.getTime());
     let day_diff = (time_diff/(1000 * 3600 * 24));
     if(Math.abs(day_diff) < 1  && day1 === day2){
        this.noActivity = false;
        this.required_timings.push(
          {
            start_time:each.start_time,
            end_time:each.end_time
          }
        );
     }
   }
  }

  closeModal(){
    this.showModal = false;
  }

}