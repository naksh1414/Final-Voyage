import React, { useEffect, useState } from 'react';
import './AdminPage.css'; // Make sure to import the CSS

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // You can fetch user data and populate the 'users' state here

  // Sample user data
  useEffect(() => {
    setTimeout(() => {
      const sampleUsers = [
        { id: 1, username: 'User1', email: 'user1@example.com', bookings: ['Booking 1', 'Booking 2'] },
        { id: 2, username: 'User2', email: 'user2@example.com', bookings: ['Booking 3', 'Booking 4'] },
      ];

      setUsers(sampleUsers);
      setLoading(false);
    }, 2000); // Simulating a delay for fetching data
  }, []);

  return (
    <div className="admin-container">
      <h2 className="admin-heading">Admin Page</h2>

      {loading ? (
        <div className="center">
          <div className="loader"></div>
          <p>Loading user data...</p>
        </div>
      ) : (
        <div>
          {users.map((user) => (
            <div className="user-data" key={user.id}>
              <h3>User Data</h3>
              <p>ID: {user.id}</p>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
          ))}

          {users.map((user) => (
            <div className="user-bookings" key={user.id}>
              <h3>User Bookings</h3>
              <ul>
                {user.bookings.map((booking, index) => (
                  <li key={index}>{booking}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPage;
