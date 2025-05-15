import React, { useState } from 'react';
import '../App.css';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    notes: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted successfully!');
  };

  return (
    <div className="booking-container">
      <h2>Book Your Stay</h2>
      <form className="booking-form" onSubmit={handleSubmit}>

        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your full name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="checkIn">Check-in Date</label>
        <input
          type="date"
          id="checkIn"
          name="checkIn"
          value={formData.checkIn}
          onChange={handleChange}
          required
        />

        <label htmlFor="checkOut">Check-out Date</label>
        <input
          type="date"
          id="checkOut"
          name="checkOut"
          value={formData.checkOut}
          onChange={handleChange}
          required
        />

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formData.guests}
          onChange={handleChange}
        />

        <label htmlFor="notes">Special Requests</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Any special requests?"
          rows="4"
          value={formData.notes}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default BookingPage;
