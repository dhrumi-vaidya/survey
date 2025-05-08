import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DateserviceService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000/questions';

  addQuesion(data: any) {
    // console.log(data);
    return this.http.post(this.url, data);
  }
  getQuestions() {
    return this.http.get(this.url);
  }
}
