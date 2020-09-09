import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

    constructor(
        private http:HttpClient
    ){}

    postuser(){
       return this.http.put("https://useractivity-671ba.firebaseio.com/users.json",{
          
	"members": [{
        "id": "W012A3CDE",
        "real_name": "Egon Spengler",
        "tz": "America/Los Angeles",
        "activity_periods": [
            {
                "start_time": "Sep 1 2020  10:333AM",
                "end_time": "Sep 1 2020 11:543AM"
            },
            {
                "start_time": "Sep 1 2020  1:333PM",
                "end_time": "Sep 1 2020 1:543PM"
            },
            {
                "start_time": "Sep 1 2020  2:333PM",
                "end_time": "Sep 1 2020 3:543PM"
            },
            {
                "start_time": "Sep 1 2020  4:333PM",
                "end_time": "Sep 1 2020 4:543PM"
            },
            {
                "start_time": "Sep 10 2020  6:113AM",
                "end_time": "Sep 10 2020 7:003AM"
            },
            {
                "start_time": "Sep 10 2020  12:113PM",
                "end_time": "Sep 10 2020 1:003PM"
            },
            {
                "start_time": "Sep 10 2020  3:113PM",
                "end_time": "Sep 10 2020 4:003PM"
            },
            {
                "start_time": "Sep 10 2020  4:113PM",
                "end_time": "Sep 10 2020 5:003PM"
            },
            {
                "start_time": "Sep 10 2020  6:113PM",
                "end_time": "Sep 10 2020 7:003PM"
            },
            {
                "start_time": "Sep 22 2020  7:333AM",
                "end_time": "Sep 22 2020 9:023AM"
            },
            {
                "start_time": "Sep 22 2020  10:333AM",
                "end_time": "Sep 22 2020 11:023AM"
            },
            {
                "start_time": "Sep 22 2020  1:333PM",
                "end_time": "Sep 22 2020 2:023PM"
            },
            {
                "start_time": "Sep 22 2020  3:333PM",
                "end_time": "Sep 22 2020 4:023PM"
            }
        ]
    },
    {
        "id": "W07QCRPA4",
        "real_name": "Glinda Southgood",
        "tz": "Asia/Kolkata",
        "activity_periods": [
            {
                "start_time": "Sep 3 2020  10:333AM",
                "end_time": "Sep 3 2020 11:534AM"
            },
            {
                "start_time": "Sep 3 2020  1:333PM",
                "end_time": "Sep 3 2020 1:534PM"
            },
            {
                "start_time": "Sep 3 2020  3:333PM",
                "end_time": "Sep 3 2020 3:534PM"
            },
            {
                "start_time": "Sep 3 2020  4:333AM",
                "end_time": "Sep 3 2020 5:034PM"
            },
            {
                "start_time": "Sep 8 2020  10:333AM",
                "end_time": "Sep 8 2020 11:534AM"
            },
            {
                "start_time": "Sep 8 2020  1:333PM",
                "end_time": "Sep 8 2020 1:534PM"
            },
            {
                "start_time": "Sep 8 2020  3:333PM",
                "end_time": "Sep 8 2020 3:534PM"
            },
            {
                "start_time": "Sep 8 2020  4:333AM",
                "end_time": "Sep 8 2020 5:034PM"
            },
            {
                "start_time": "Sep 15 2020  10:333AM",
                "end_time": "Sep 15 2020 11:534AM"
            },
            {
                "start_time": "Sep 15 2020  1:333PM",
                "end_time": "Sep 15 2020 1:534PM"
            },
            {
                "start_time": "Sep 15 2020  3:333PM",
                "end_time": "Sep 15 2020 3:534PM"
            },
            {
                "start_time": "Sep 15 2020  4:333AM",
                "end_time": "Sep 15 2020 5:034PM"
            }
        ]
    },
    {
        "id": "W07QCRPB5",
        "real_name": "William Gilbert",
        "tz": "USA/Chicago",
        "activity_periods": [
            {
                "start_time": "Sep 5 2020  10:333AM",
                "end_time": "Sep 5 2020 11:543AM"
            },
            {
                "start_time": "Sep 5 2020  1:333PM",
                "end_time": "Sep 5 2020 1:543PM"
            },
            {
                "start_time": "Sep 5 2020  2:333PM",
                "end_time": "Sep 5 2020 3:543PM"
            },
            {
                "start_time": "Sep 5 2020  4:333PM",
                "end_time": "Sep 5 2020 4:543PM"
            },
            {
                "start_time": "Sep 14 2020  6:113AM",
                "end_time": "Sep 10 2020 7:003AM"
            },
            {
                "start_time": "Sep 14 2020  12:113PM",
                "end_time": "Sep 14 2020 1:003PM"
            },
            {
                "start_time": "Sep 14 2020  3:113PM",
                "end_time": "Sep 14 2020 4:003PM"
            },
            {
                "start_time": "Sep 14 2020  4:113PM",
                "end_time": "Sep 14 2020 5:003PM"
            },
            {
                "start_time": "Sep 14 2020  6:113PM",
                "end_time": "Sep 14 2020 7:003PM"
            },
            {
                "start_time": "Sep 21 2020  7:333AM",
                "end_time": "Sep 21 2020 9:023AM"
            },
            {
                "start_time": "Sep 21 2020  10:333AM",
                "end_time": "Sep 21 2020 11:023AM"
            },
            {
                "start_time": "Sep 21 2020  1:333PM",
                "end_time": "Sep 21 2020 2:023PM"
            },
            {
                "start_time": "Sep 21 2020  3:333PM",
                "end_time": "Sep 21 2020 4:023PM"
            }
        ]
    }
]  
        })
    }

    getUser(){
       return this.http.get('https://useractivity-671ba.firebaseio.com/users.json');
    }
}