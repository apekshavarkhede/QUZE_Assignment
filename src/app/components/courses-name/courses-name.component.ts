import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-courses-name',
  templateUrl: './courses-name.component.html',
  styleUrls: ['./courses-name.component.css']
})
export class CoursesNameComponent implements OnInit {

  constructor(private http: HttpService) { }
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

  ngOnInit() {
    this.getData()
  }

}
