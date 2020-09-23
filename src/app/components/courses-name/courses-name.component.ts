import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import {CoursePipe} from '../../pipes/course.pipe'

@Component({
  selector: 'app-courses-name',
  templateUrl: './courses-name.component.html',
  styleUrls: ['./courses-name.component.css']
})
export class CoursesNameComponent implements OnInit {

  constructor(private http: HttpService,private route: Router) { }
  value = "";
  coursesName: Array<any>

  getData() {
    this.http.get().subscribe(data => {
      let completeData = Object.entries(data);
      this.coursesName = [];
      completeData.forEach((item) => {
        this.coursesName.push(item[1].title)
      })
    })
  }

  getDetails(){
    this.route.navigate(['details'])
  }

  ngOnInit() {
    this.getData()
  }

}
