import 'zone.js'; // This needs to be first for Angular

import React from 'react';
import ReactDOM from 'react-dom';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// React components
import { ReactComponent } from './react-component';

// Angular components
import { AngularComponent } from './angular-component';
import { AngularDatePickerComponent } from './angular-date-picker.component';
import { AngularSubmitFormComponent } from './angular-submit-form.component';
import { AngularAFrameModelViewerComponent } from './angular-aframe-model-viewer.component';

// React setup
ReactDOM.render(<ReactComponent />, document.getElementById('react-root'));

// Angular setup
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AngularComponent, 
    AngularDatePickerComponent, 
    AngularSubmitFormComponent,
    AngularAFrameModelViewerComponent
  ],
  bootstrap: [AngularComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// Add some basic global styles
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Courier New', monospace;
    background-color: #0a0a0a;
    color: #00ff00;
    padding: 20px;
  }
  
  h1, h2 {
    color: #00ff00;
    text-shadow: 0 0 5px #00ff00;
  }
  
  #react-root, app-root {
    margin-bottom: 40px;
  }
`;
document.head.appendChild(style);