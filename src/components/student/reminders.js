// ReminderPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './reminders.css'; // Import your CSS file
import Navbar from './UserNavbar';

const Reminders = () => {
  const [reminders, setReminders] = useState([]);

  useEffect(() => {
    // Fetch reminders from the backend
    axios.get('/api/reminders') // Replace with your actual API endpoint
      .then(response => {
        setReminders(response.data);
      })
      .catch(error => {
        console.error('Error fetching reminders:', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <div className="reminder-page-container">
      <div className="reminder-category">
        <h2>Attendance</h2>
        {renderReminders('attendance')}
      </div>
      <div className="reminder-category">
        <h2>Internal Marks</h2>
        {renderReminders('internalMarks')}
      </div>
      <div className="reminder-category">
        <h2>Fees</h2>
        {renderReminders('fees')}
      </div>
    </div>
    </>
  );

  function renderReminders(category) {
    const categoryReminders = reminders.filter(reminder => reminder.category === category);

    if (categoryReminders.length === 0) {
      return <p>No reminders for this category.</p>;
    }

    return (
      <ul>
        {categoryReminders.map(reminder => (
          <li key={reminder.id}>{reminder.message}</li>
        ))}
      </ul>
    );
  }
};

export default Reminders;

