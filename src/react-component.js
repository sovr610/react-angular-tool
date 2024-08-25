import React, { useState } from 'react';
import { ReactDatePicker } from './react-date-picker';
import { ReactSubmitForm } from './react-submit-form';
import { ReactAFrameModelViewer } from './react-aframe-model-viewer';

export const ReactComponent = () => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log('Selected date:', date);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      <h1>React Components</h1>
      <h2>React Date Picker</h2>
      <ReactDatePicker onDateChange={handleDateChange} />
      <p>Selected date: {selectedDate}</p>
      <h2>React Submit Form</h2>
      <ReactSubmitForm onSubmit={handleFormSubmit} />
      <h2>React A-Frame Model Viewer</h2>
      <ReactAFrameModelViewer modelUrl="assets/stool/barstool.gltf" />
    </div>
  );
};