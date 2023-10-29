// ProfilePage.js

import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import BookingList from './Bookinglist';
import './ProfilePage.css'; // Import the CSS file

const ProfilePage = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profile-page">
      <div className="profile-info">
        <h2>Profile Information</h2>
        <p>Name: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>

      <div className="booking-history">
        <h2>Booking History</h2>
        <BookingList />
      </div>
    </div>
  );
};

export default ProfilePage;
