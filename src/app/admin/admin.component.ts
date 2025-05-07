import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent {
  btnclicked = false;
  surveyFields = [{ question: '', category: '', isClicked: false }];
  addQuestionFields(index: number) {
    console.log('Add Question Fields');
    this.surveyFields[index].isClicked = true;

    this.surveyFields.push({ question: '', category: '', isClicked: false });
  }

  removeQuestionFields(index: number) {
    console.log('Remove Question Fields');
    if (this.surveyFields.length > 1) {
      this.surveyFields.splice(index, 1);
    }
  }
}
