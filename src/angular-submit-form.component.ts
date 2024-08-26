import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-angular-submit-form',
  template: `
    <form (ngSubmit)="onSubmit()" #form="ngForm" class="cyberpunk-form">
      <div class="form-group">
        <label for="fullName" class="cyberpunk-label">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          class="cyberpunk-input"
          [(ngModel)]="formData.fullName"
          required
        />
      </div>
      <div class="form-group">
        <label for="email" class="cyberpunk-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="cyberpunk-input"
          [(ngModel)]="formData.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="phone" class="cyberpunk-label">Phone Number</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          class="cyberpunk-input"
          [(ngModel)]="formData.phone"
          required
        />
      </div>
      <div class="form-group">
        <label for="message" class="cyberpunk-label">Message</label>
        <textarea
          id="message"
          name="message"
          class="cyberpunk-textarea"
          [(ngModel)]="formData.message"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        [class.hover]="isHovered"
        (mouseenter)="isHovered = true"
        (mouseleave)="isHovered = false"
        class="cyberpunk-button"
      >
        Submit
      </button>
    </form>
  `,
  styles: [`
    .cyberpunk-form {
      max-width: 400px;
      padding: 20px;
      background-color: #0a0a0a;
      border: 2px solid #00ff00;
      box-shadow: 0 0 10px #00ff00;
      font-family: 'Courier New', monospace;
      color: #00ff00;
    }
    .form-group {
      margin-bottom: 20px;
    }
    .cyberpunk-label {
      display: block;
      margin-bottom: 5px;
      font-size: 14px;
    }
    .cyberpunk-input, .cyberpunk-textarea {
      width: 100%;
      padding: 8px;
      background-color: #1a1a1a;
      border: 1px solid #00ff00;
      color: #00ff00;
      font-size: 16px;
      outline: none;
    }
    .cyberpunk-textarea {
      min-height: 100px;
    }
    .cyberpunk-button {
      padding: 10px 20px;
      background-color: #00ff00;
      color: #0a0a0a;
      border: none;
      cursor: pointer;
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      transition: all 0.3s ease;
    }
    .cyberpunk-button.hover {
      background-color: #0a0a0a;
      color: #00ff00;
      box-shadow: 0 0 10px #00ff00;
    }
  `]
})
export class AngularSubmitFormComponent {
  @Output() formSubmit = new EventEmitter<any>();

  formData = {
    fullName: '',
    email: '',
    phone: '',
    message: ''
  };

  isHovered = false;

  onSubmit() {
    this.formSubmit.emit(this.formData);
  }
}
