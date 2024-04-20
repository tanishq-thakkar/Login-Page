1,6c1,6
< # React Login Page Project
<
< This project is a simple React application that provides a login page with functionalities for user authentication and registration. It includes features such as user login, user registration, forgot password functionality, and Google OAuth authentication.
<
< ## Table of Contents
<
< - [Installation](#installation)
---
> # Login Page Project
> 
> This project is a simple React application that provides a login page with user authentication and registration functionalities. It includes features such as user login, user registration, forgot password functionality, and Google OAuth authentication.
> 
> ## Table of Contents
> 
> - [Installation](#installation)
15,16c15,16
< 1. Clone the repository to your local machine:
<    ```bash
---
> 1. Clone the repository to your local machine:
>    ```bash
19c19
< 3. Install dependencies:
---
> 3. Install dependencies:
21,22c21,22
< 4. Start the development server:
<    ```bash
---
> 4. Start the development server:
>    ```bash
24c24
< 5. Open your browser and navigate to `http://localhost:3000` to view the application.
---
> 5. Open your browser and navigate to `http://localhost:3000` to view the application.
27c27
< Once the application is running, you can access the following routes:
---
> Once the application is running, you can access the following routes:
30c30
< - `/login`: User login page.
---
> - `/login`: User login page.
32,33c32,33
< - `/forgot`: Forgot password page.
< - `/new`: User registration page.
---
> - `/forgot`: Forgot password page.
> - `/new`: User registration page.
35,36c35,36
< - `src/`: Contains the source code for the React application.
<   - `components/`: Contains React components for different pages and reusable UI elements.
---
> - `src/`: Contains the source code for the React application.
>   - `components/`: Contains React components for different pages and reusable UI elements.
38c38
<   - `api/`: Contains API service files for making requests to the backend.
---
>   - `api/`: Contains API service files for making requests to the backend.
40c40
<   - `App.js`: Main component that renders different routes using React Router.
---
>   - `App.js`: Main component that renders different routes using React Router.
42c42
< - `server/`: Contains backend code (not included in this repository).
---
> - `server/`: Contains backend code (not included in this repository).
44c44
< - `public/`: Contains static assets and HTML template files.
---
> - `public/`: Contains static assets and HTML template files.
46c46
< - `GET /api/tutorials`: Retrieve user details and perform authentication.
---
> - `GET /api/tutorials`: Retrieve user details and perform authentication.
48c48
< - `GET /api/tutorials/all`: Retrieve all users (example route).
---
> - `GET /api/tutorials/all`: Retrieve all users (example route).
50c50
< - `GET /api/tutorials/{id}`: Retrieve user details by ID.
---
> - `GET /api/tutorials/{id}`: Retrieve user details by ID.
52c52
< - `POST /api/tutorials`: Create a new user.
---
> - `POST /api/tutorials`: Create a new user.
54c54
< - `PUT /api/tutorials`: Update user details.
---
> - `PUT /api/tutorials`: Update user details.
56c56
< - `DELETE /api/tutorials/{id}`: Delete a user.
---
> - `DELETE /api/tutorials/{id}`: Delete a user.
59c59
< Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open a GitHub issue or submit a pull request.
---
> Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open a GitHub issue or submit a pull request.
61c61
< This project is licensed under the [MIT License](LICENSE).
---
> This project is licensed under the [MIT License](LICENSE).
