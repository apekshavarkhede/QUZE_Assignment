import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  url = "https://quze-intern-test.s3.us-east-2.amazonaws.com/course-data.json"

  post() {
    return this.http.get(this.url)
  }
}
