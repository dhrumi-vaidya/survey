import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateserviceService } from '../dateservice.service';
import { NgForm } from '@angular/forms';

interface SurveyField {
  question: string;
  category: string;
  questionTitle: string;
  options: string[] | string;
  isClicked: boolean;
  id?: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router, private service: DateserviceService) {}

  btnclicked = false;
  surveyTitle = '';
  surveyFields: SurveyField[] = [
    {
      question: '',
      category: '',
      questionTitle: '',
      options: '',
      isClicked: false,
    },
  ];

  addQuestionFields(index: number) {
    console.log('Add Question Fields');
    this.surveyFields[index].isClicked = true;

    this.surveyFields.push({
      question: '',
      category: '',
      questionTitle: '',
      options: '',
      isClicked: false,
    });

    console.log(this.surveyFields);
  }

  removeQuestionFields(index: number) {
    console.log('Remove Question Fields');
    if (this.surveyFields.length > 1) {
      this.surveyFields.splice(index, 1);
    }
  }

  logout() {
    alert('Logged out successfully!');
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onSubmit(form: NgForm) {
    console.log('Questions to submit individually:', this.surveyFields);

    this.surveyFields.forEach((field, index) => {
      if (typeof field.options === 'string') {
        field.options = field.options.split(',').map((opt) => opt.trim());
      }

      if (field.options.length === 1 && field.options[0] === '') {
        field.options = [];
      }

      this.service.addQuesion(field).subscribe(
        (response: any) => {
          console.log('submitted successfully', response);
          alert('All questions submitted successfully!');
        },
        (error) => {
          console.error('Error submitting question:', field, error);
        }
      );
    });
  }
}
