# Travel and Tourism Website Readme

This repository contains the code for a Travel and Tourism website that allows users to book tickets for monuments, adventure sports, religious places, and museums. The website is built using a tech stack that includes React.js, Tailwind CSS, Autoprefixer, Node.js, MongoDB Atlas, Mongoose, Express.js, and JWT tokens.

## Features

- **User Authentication**: Users can sign up and log in securely using JWT tokens.
- **User Profiles**: Registered users can view their profiles and booking history.
- **Ticket Booking**: Users can book tickets for monuments, adventure sports, religious places, and museums.
- **Responsive Design**: The website is responsive and mobile-friendly.

## Tech Stack

The website is built using the following technologies:

- **React.js**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling the website.
- **Autoprefixer**: A PostCSS plugin to parse CSS and add vendor prefixes.
- **Node.js**: A JavaScript runtime for building server-side applications.
- **MongoDB Atlas**: A cloud-based database service for storing data.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Express.js**: A web application framework for building server-side applications.
- **JWT Tokens**: JSON Web Tokens are used for secure user authentication.

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/travel-tourism-website.git
   cd Final Voyage
   ```

2. Install the project dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. The website will be accessible at `http://localhost:3000` in your web browser.

## Setting up MongoDB Atlas

1. Create a MongoDB Atlas account if you don't have one.
2. Create a new cluster and configure the database settings.
3. Obtain the connection string from MongoDB Atlas.
4. Create a `.env` file in the project root directory and add the following:

   ```env
   MONGODB_URI=your-mongodb-uri
   ```

   Replace `your-mongodb-uri` with the actual connection string you obtained from MongoDB Atlas.

## Application Structure

The application's source code is organized as follows:

- `src`: Contains the front-end code built using React.js.
- `server`: Contains the back-end code built using Node.js, Express.js, and Mongoose.
- `public`: Contains public assets like images and icons.
- `package.json`: Defines project dependencies and scripts.
- `README.md`: This readme file.

## Contributors

- [Nakshatra](https://github.com/naksh1414)
- [Anshika](https://github.com/dev-anshika098)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

Please feel free to contribute to and enhance this project. Enjoy building your Travel and Tourism website!
 