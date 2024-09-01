# Hotstar Clone

Welcome to the Hotstar Clone, a full-stack web application replicating the core features of the popular streaming service Hotstar. This project is designed to deliver an 80% UI match to the original platform, offering users a seamless and immersive experience for discovering and watching movies. The project includes a range of features, such as movie categories, personalized watchlists, and a subscription system.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Future Enhancements](#future-enhancements)
- [Deployment](#deployment)
- [Additional Information](#additional-information)


## Features

- **Movie Categories**: Browse through different movie categories, providing an intuitive way to discover content based on genre, popularity, and more.
- **Banner Section**: The homepage prominently features a banner section that highlights the latest and most popular movies, enhancing user engagement.
- **Personalized Watchlist**: Each user has their own watchlist, allowing them to save movies they are interested in viewing later.
- **Swiper Slider Integration**: Using Swiper.js, the application includes a sleek slider that displays a user’s watchlist in an interactive and visually appealing way.
- **Subscription Page**: Users are prompted to subscribe to access full-length movies. While payment integration is under development, the subscription page is designed to facilitate the process in the future.
- **Gmail OTP Authentication**: Secure user authentication is implemented via Gmail OTP verification using NodeMailer, providing a secure method for users to log in and manage their accounts.
- **Responsive Design**: The application is fully responsive, ensuring that users have an optimal experience across all devices, whether desktop, tablet, or mobile.
- **Skeleton Loading States**: Skeleton cards and loaders are used to improve user experience during content loading, providing smooth visual transitions.

## Technologies Used

### Frontend:
- **Next.js**: Leveraging the power of React with server-side rendering and static site generation, enhancing performance and SEO.
- **Styled-components**: Enabling modular and maintainable CSS styling across the application, facilitating a clean and organized UI/UX.
- **Swiper.js**: Implemented for creating highly responsive sliders, enhancing the visual experience for watchlists and other interactive content.

### Backend:
- **Node.js**: A robust JavaScript runtime for handling backend logic and serving requests efficiently.
- **Express.js**: A minimalist web framework for building APIs and managing server-side operations.
- **MongoDB**: A flexible NoSQL database for storing user data, including authentication details, watchlists, and subscriptions.
- **Firebase**: Integrated for storing and managing video and image assets, providing a scalable solution for media handling.

### Authentication:
- **NodeMailer**: Utilized for implementing Gmail OTP (One-Time Password) authentication, ensuring secure and verified user logins.

### Deployment:
- **Frontend**: The frontend of the application is deployed on Vercel, known for its performance and seamless integration with Next.js. You can access the frontend here: [Hotstar Clone - Frontend](https://disney-hotstar-ritam855s-projects.vercel.app/).
- **Backend**: The backend is deployed on Render, a reliable platform for deploying Node.js applications. Visit the backend endpoint [here](https://render.com/).

## Project Structure

. ├── backend/ │ ├── controllers/ # API controllers for managing business logic │ ├── models/ # Database models representing MongoDB collections │ ├── routes/ # API routes for handling requests │ ├── utils/ # Utility functions for shared operations (e.g., OTP generation) │ └── app.js # Main server application entry point ├── frontend/ │ ├── components/ # Reusable UI components (e.g., MovieCard, WatchlistItem) │ ├── pages/ # Next.js pages for routing and view logic │ ├── styles/ # Styled-components CSS for the entire application │ └── utils/ # Helper functions and hooks ├── public/ │ └── assets/ # Static assets (e.g., images, logos, icons) └── README.md # Project documentation

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/hotstar-clone.git
2. **Install dependencies:**
    Navigate to the `frontend` directory and install the required npm packages:
    ```bash
    cd frontend
    npm install
    ```

    Do the same for the `backend` directory:
    ```bash
    cd backend
    npm install
    ``` 
 
3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory and populate it with the necessary configuration variables such as:
   - `MONGO_URI`: Your MongoDB connection string.
   - `FIREBASE_API_KEY`: Firebase API key for accessing videos and images.
   - `FIREBASE_AUTH_DOMAIN`: Firebase authentication domain.
   - `FIREBASE_PROJECT_ID`: Firebase project ID.
   - `FIREBASE_STORAGE_BUCKET`: Firebase storage bucket URL.
   - `FIREBASE_MESSAGING_SENDER_ID`: Firebase messaging sender ID.
   - `FIREBASE_APP_ID`: Firebase app ID.
   - `GMAIL_API_USER`: Gmail account user for sending OTP emails.
   - `GMAIL_API_PASSWORD`: Gmail API password for sending OTP emails.

4. **Start the application:**

   - To run the frontend:
     ```bash
     cd frontend
     npm run dev
     ```

   - To run the backend:
     ```bash
     cd backend
     npm start
     ```
5. **Access the app:**

   Visit `http://localhost:3000` in your browser to view the Hotstar Clone.



## Usage

Once the application is running, users can:

- Browse movies by category.
- View highlighted movies on the homepage banner.
- Create and manage their own personalized watchlist.
- Authenticate using Gmail OTP.
- Explore the subscription page (with full payment functionality under development).

## Future Enhancements

We have several features and improvements planned for the future:

- **Payment Gateway Integration**: Implementing payment systems to fully enable subscription services.
- **Movie Recommendations**: Adding a recommendation engine that suggests movies based on user behavior and preferences.
- **Enhanced UI/UX**: Continuously refining the UI to improve user interaction and satisfaction.

## Deployment

- **Frontend**: Deployed on Vercel - [Frontend Deployment](https://disney-hotstar-s3r3-ce2g-pragnya45s-projects.vercel.app/).
- **Backend**: Deployed on Render - [Backend Deployment](https://render.com/).


## Additional Information

- **Reusable Components**: The codebase leverages reusable components, such as `MovieCard` and `WatchlistItem`, which help reduce duplication and promote cleaner, more maintainable code.
  
- **Skeleton & Loaders**: Skeleton loading screens and loaders are integrated to improve user experience during API calls and data fetching, providing a more polished and professional interface.
