import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DateserviceService } from '../dateservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  constructor(private router: Router, private service: DateserviceService) {}
  btnclicked = false;
  surveyTitle = '';
  surveyFields = [
    {
      question: '',
      category: '',
      questionTitle: '',
      options: [''],
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
      options: [],
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

  onSubmit(form: any) {
    this.surveyFields.flat();
    console.log('Flattened array', this.surveyFields);

    // this.service.addQuesion(this.surveyFields).subscribe((res) => {
    //   console.log('API response:', res);
    // });
  }
}
