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
  listAns: string[] = [];

  constructor(private service: DateserviceService, private router: Router) {}

  ngOnInit() {
    this.service.getQuestions().subscribe((data) => {
      this.questions = data as any[];
    });
  }
  onCheckboxChange(event: any, option: string): void {
    if (event.target.checked) {
      this.listAns.push(option);
    } else {
      const index = this.listAns.indexOf(option);
      if (index > -1) {
        this.listAns.splice(index, 1);
      }
    }
  }

  submitForm(form: any) {
    alert('Form submitted successfully!');
    console.log('Form value', form.value);
    form.reset();
  }
  logout() {
    alert('Logged out successfully!');
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
