import React from 'react';

const BookingList = () => {
  // Fetch the user's booking history from your API or context
  const bookings = [
    { id: 1, date: '2023-10-29', place: 'Vaishno Devi' },
    { id: 2, date: '2023-10-29', place: 'Taj Mahal ,Agra' },
    // Add more bookings
  ];

  return (
    <ul className="booking-list">
      {bookings.map((booking) => (
        <li key={booking.id} className="booking-item">
          <div className="booking-info">
            <p>Booking Date: {booking.date}</p>
            <p>Place: {booking.place}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default BookingList;
