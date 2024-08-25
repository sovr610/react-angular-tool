import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="angular-container">
      <h1>Angular Components</h1>
      
      <h2>Angular Date Picker</h2>
      <app-angular-date-picker (dateChange)="onDateChange($event)"></app-angular-date-picker>
      <p>Selected date: {{ selectedDate }}</p>
      
      <h2>Angular Submit Form</h2>
      <app-angular-submit-form (formSubmit)="onFormSubmit($event)"></app-angular-submit-form>
      
      <h2>Angular A-Frame Model Viewer</h2>
      <app-angular-aframe-model-viewer [modelUrl]="'assets/stool/barstool.gltf'"></app-angular-aframe-model-viewer>
    </div>
  `,
  styles: [`
    .angular-container {
      font-family: 'Courier New', monospace;
      color: #00ff00;
      background-color: #0a0a0a;
      padding: 20px;
      border: 2px solid #00ff00;
      box-shadow: 0 0 10px #00ff00;
    }
    h1, h2 {
      color: #00ff00;
      text-shadow: 0 0 5px #00ff00;
    }
    p {
      margin-top: 10px;
      font-size: 16px;
    }
  `]
})
export class AngularComponent {
  selectedDate: string = '';

  onDateChange(date: string) {
    this.selectedDate = date;
    console.log('Selected date:', date);
  }

  onFormSubmit(formData: any) {
    console.log('Form submitted:', formData);
  }
}