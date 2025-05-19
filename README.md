# User Authentication API

## Overview
This is a RESTful API service that provides user authentication functionality including registration and login. The API uses JWT (JSON Web Token) for authentication and MongoDB for data storage.

## Features
- User registration with email validation
- User login with JWT authentication
- Password hashing for security
- Email existence verification

## Tech Stack
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing

## Installation

Clone the repository:
```bash
git clone https://github.com/aliroohan/image-_forensics_backend.git
```

Install dependencies:
```bash
cd image-_forensics_backend
npm install
```

## Environment Setup
Create a `.env` file in the root directory with the following variables:

```
PORT=3000
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=your_mongodb_connection_string
```

## Running the Application
```bash
npm start
```

## API Documentation

### Authentication Endpoints

#### Register a new user
`POST /api/user/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response (201 Created):**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com"
}
```

**Possible Errors:**
- 400: Missing required fields
- 400: User with this email or username already exists
- 400: Email does not exist
- 500: Server error during registration

#### Login user
`POST /api/user/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response (200 OK):**
```json
{
  "_id": "user_id",
  "name": "John Doe",
  "username": "johndoe",
  "email": "john@example.com",
  "token": "jwt_token_here"
}
```

**Possible Errors:**
- 400: Missing email or password
- 401: Invalid email or password
- 500: Server error during login

## Database Schema

### User Model
```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  timestamps: true
}
```

## Project Structure
```
├── app.js                  # Express app setup
├── config/
│   └── dbConfig.js         # Database configuration
├── controllers/
│   └── userController.js   # User controller functions
├── models/
│   └── user.js             # User model schema
├── routes/
│   └── userRoutes.js       # API routes for user endpoints
├── .env                    # Environment variables (not in repo)
├── package.json            # Project dependencies
└── README.md               # This file
```

## Authentication Flow
1. User registers with name, username, email, and password
2. Password is hashed using bcrypt before saving to database
3. User logs in with email and password
4. Server validates credentials and returns JWT token
5. Client includes token in Authorization header for protected routes

## Dependencies
- express: Web framework
- mongoose: MongoDB object modeling
- jsonwebtoken: JWT implementation
- bcryptjs: Password hashing
- email-existence: Email validation
- dotenv: Environment variable management
- cors: Cross-origin resource sharing
- body-parser: Request body parsing

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contact
Your Name - your.email@example.com

Project Link: [https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)