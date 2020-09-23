import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-show-course-details',
  templateUrl: './show-course-details.component.html',
  styleUrls: ['./show-course-details.component.css']
})
export class ShowCourseDetailsComponent implements OnInit {

  constructor(private http: HttpService) { }
  header: Array<any>
  rows: Array<any>

  getData() {
    this.http.get().subscribe(data => {
      let completeData = Object.entries(data);
      this.rows = [];
      this.header = []

      completeData.forEach((item) => {
        this.rows.push(item[1])
      })

      let keys = Object.keys(this.rows[0]);

      let count = 0;
      while (count < 5) {
        for (let m = 0; m < 5; m++) {
          this.header.push(keys[m])
          count++
        }
      }
    })
  }

  ngOnInit() {
    this.getData()
  }

}
