github repo link https://github.com/man-sol/shoppy

#  ShoppyGlobe Backend API

A complete E-commerce Backend API built using **Node.js, Express.js, MongoDB, and JWT Authentication**.

This project provides Product CRUD operations and User Authentication (Register & Login) functionality.

---

# 📖 Project Description

ShoppyGlobe Backend is a RESTful E-commerce API developed using Node.js and Express.js. The application provides complete Product management functionality along with secure User Authentication. It allows users to register, log in securely using encrypted passwords, and perform CRUD (Create, Read, Update, Delete) operations on products. The backend is connected to MongoDB for data storage and uses JWT (JSON Web Token) for authentication. This project demonstrates backend development fundamentals including API design, database integration, authentication, error handling, and environment configuration.

---

## 🎯 Key Highlights

- Built using Node.js and Express.js
- MongoDB database integration using Mongoose
- Complete Product CRUD operations
- Secure User Registration and Login
- Password hashing using bcryptjs
- JWT-based authentication system
- RESTful API architecture
- Environment variable management using dotenv
- Tested using Thunder Client / Postman
- Structured folder organization for scalability


# 🏗 Architecture Overview

The application follows a structured MVC-like pattern:

- **Models** handle database schemas and data structure.
- **Routes** handle API endpoint logic.
- **Server.js** manages middleware, database connection, and server initialization.
- **MongoDB** stores application data.
- **JWT** handles authentication and authorization.

This separation of concerns makes the project scalable and maintainable.

---

# 🔄 API Workflow

1. Client sends HTTP request.
2. Express route handles the request.
3. Mongoose interacts with MongoDB.
4. Response is returned in JSON format.
5. In case of errors, proper status codes are returned.

---

# 📌 HTTP Status Codes Used

- `200` → Success
- `201` → Resource Created
- `400` → Bad Request / Invalid Credentials
- `404` → Resource Not Found
- `500` → Server Error


#  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

---



---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository  

git clone https://github.com/man-sol/shoppy.git


## 2️⃣ Install Dependencies



## 3️⃣ Create .env File

Create a `.env` file in the root folder and add:


## 4️⃣ Start MongoDB (If Using Local)

Make sure MongoDB service is running on:

## 5️⃣ Run the Server