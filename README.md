
 # React Login Page Project

 This project is a simple React application that provides a login page with functionalities for user authentication and registration. It includes features such as user login, user registration, forgot password functionality, and Google OAuth authentication.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

# Installation
 1. Clone the repository to your local machine:
    ```
    git clone https://github.com/yourusername/react-login-page.git
    ```
 2. Install dependencies:
    ```
    npm install
    ```
 3. Start the development server:
    ```
    npm start
    ```
 4. Open your browser and navigate to `http://localhost:3000` to view the application.
---

# Usage
Once the application is running, you can access the following routes:
 - `/login`: User login page.
   
 - `/forgot`: Forgot password page.
   
 - `/new`: User registration page.
---
# Project Structure
 - `src/`: Contains the source code for the React application.
   
 - `components/`: Contains React components for different pages and reusable UI elements.
   
 - `api/`: Contains API service files for making requests to the backend.
   
 - `App.js`: Main component that renders different routes using React Router.
   
 - `server/`: Contains backend code (not included in this repository).
   
 - `public/`: Contains static assets and HTML template files.
---
# API Endpoints
 - `GET /api/tutorials`: Retrieve user details and perform authentication.

 - `GET /api/tutorials/all`: Retrieve all users (example route).

 - `GET /api/tutorials/{id}`: Retrieve user details by ID.

 - `POST /api/tutorials`: Create a new user.

 - `PUT /api/tutorials`: Update user details.

 - `DELETE /api/tutorials/{id}`: Delete a user.
---
# Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open a GitHub issue or submit a pull request.

# License
 This project is licensed under the [MIT License](LICENSE).
