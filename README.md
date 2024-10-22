# GraphQL API Documentation

## Overview
This project is a GraphQL API built with Express and Mongoose for managing users. It allows for user registration, login, and retrieval of user data.

## Prerequisites
- Node.js (version 14 or higher)
- MongoDB Atlas account

## Installation and Setup
1. Clone the repository:
      ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
2. Install the required dependencies:
    ```bash
    npm install
3. Create a .env file in the root directory of the project and add the following variables:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.6z1fe.mongodb.net/<database>?retryWrites=true&w=majority
    PORT=4000
  Note: Replace <username>, <password>, and <database> with your MongoDB Atlas credentials and database name.

## Running the Application 
To start the server, use the following command:
  ```bash
  npx nodemon src/server.js
  ```
Note: You should see output indicating that the server is running at http://localhost:4000/graphql.

## Testing the API
You can test the API using a GraphQL client such as Postman, Insomnia, or the built-in GraphQL Playground available at http://localhost:4000/graphql.
  ### Example: Register a User: 
  Use the following mutation to register a user:
  ```graphql
  mutation {
    register(username: "JohnDoe", email: "john.doe@example.com", password: "password123") {
      id
      username
      email
    }
  }
  ```
  Expected Response:
  ```json
  {
    "data": {
      "register": {
        "id": "671656f9a86d78edd0525392",
        "username": "JohnDoe",
        "email": "john.doe@example.com"
      }
    }
  }
  ```
  Example: Login a User: To log in, use the following mutation:
  ```graphql
    mutation {
    login(email: "john.doe@example.com", password: "password123") 
  }
  ```
Expected Response:
```json
{
  "data": {
    "login": "yourAuthTokenHere"
  }
}
```
Example: Get All Users: You can retrieve all users with the following query:
```graphql
query {
  getAllUsers {
    id
    username
    email
  }
}
```
Expected Response:
```json
{
  "data": {
    "getAllUsers": [
      {
        "id": "671656f9a86d78edd0525392",
        "username": "JohnDoe",
        "email": "john.doe@example.com"
      }
    ]
  }
}
```
Example: Get User by ID: To get a user by their ID, use this query:
```graphql
query {
  getUserById(id: "671656f9a86d78edd0525392") {
    id
    username
    email
  }
}
```
Expected Response:
```json
{
  "data": {
    "getUserById": {
      "id": "671656f9a86d78edd0525392",
      "username": "JohnDoe",
      "email": "john.doe@example.com"
    }
  }
}
```

## Conclusion
This documentation provides a comprehensive guide on how to set up, run, and test your GraphQL API. You can expand the schema and resolvers to include additional functionality as needed.
  
