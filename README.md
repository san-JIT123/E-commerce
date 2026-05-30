# E-Commerce Product 

 ## Features

### User Registration & Login

Users can create an account and log in securely using their email and password.

### JWT Authentication

JSON Web Tokens (JWT) are generated after successful login and registration to authenticate users.

### Cookie-Based Authentication

JWT tokens are stored in browser cookies and verified through authentication middleware for protected routes.

### Create Product

Authenticated users can create new products with details such as name, description, price, category, and images.

### Get All Products

Fetch all available products from the database.

### Get Product By ID

Retrieve a specific product using its unique MongoDB ID.

### Update Product

Authenticated users can update only their own products, including product details and images.

### Delete Product

Authenticated users can delete only the products they have created.

### Multiple Image Upload (Multer)

Supports uploading multiple product images using Multer middleware and stores image names in an array.

### Category Filtering using Query Parameters

Products can be filtered by category using query parameters.
ex- GET /api/product?category=Men

### Global Error Handling

Centralized error handling middleware manages validation, authentication, database, and server errors.

### MongoDB Integration

MongoDB is used as the database, with Mongoose for schema modeling and database operations.

 

## teck and package

Node.js
Express.js
MongoDB
 Mongoose
JWT
 Bcrypt
Multer
Cookie Parser

## API Endpoints

### Authentication

 POST -/api/auth/register
 POST -/api/auth/login

### Products

 GET -/api/product
 GET -/api/product?category=Men`
 GET -/api/product/:id
 POST -/api/product/create
PUT -/api/product/update/:id
DELETE -/api/product/delete/:id

## .env
PORT
MONGO_URL
JWT_SECRET_KEY
 
  

##  folder
src->
   config
   controller
   middleware
   model
   routes
   service
   utils
   app.js
server.js  

##developer
Sanjit keleng 

