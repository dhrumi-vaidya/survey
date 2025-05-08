import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { DateserviceService } from '../dateservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  title = 'Rate My App';
  questions: any[] = [];
  textAns = '';
  radioAns = '';
  listAns: [] = [];

  constructor(private service: DateserviceService, private router: Router) {}

  ngOnInit() {
    this.service.getQuestions().subscribe((data) => {
      this.questions = data as any[];
      console.log(this.questions);
    });
  }

  submitForm(form: any) {
    alert('Form submitted successfully!');
    console.log('Form value', form.value);
    console.log(this.questions);
    form.reset();
  }
  logout() {
    alert('Logged out successfully!');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
