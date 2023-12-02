# Todo API

This is the backend for my TrueCoders final project. This API uses a SQL database to perform full CRUD operations on users and their todo items. There is a React front end and it's repo can be found [here](https://github.com/JonathanDPotter/todos-app).

## Technologies used

This app was built using Node, TypeScript, Express, SQL, bcrypt, cors, dotenv, Helmet.js, Lodash, morgan, MySql2, and Zod.

## Routes

```json
{
  "/": { "GET": "Returns the home page." },
  "/home": { "GET": "Redirects to '/'." },
  "/about": { "GET": "Returns the about page." },
  "/healthcheck": { "GET": "Returns a status of 200 if server is running." },
  "/routes": { "GET": "Returns this json object." },
  "/api": {
    "/todos": {
      "/": {
        "POST": "Takes in a new todo in the format {todo: string, date: string, complete: boolean, user_id: number} and adds it to the database."
      },
      "/:id": {
        "PUT": "Takes in an updated todo in the format {todo: string, date: string, complete: boolean, user_id: number} and updates the record with the specified id in the database.",
        "DELETE": "Deletes the todo with the specified id in from teh database."
      },
      "/:user_id/:id?": {
        "GET": "Returns all todos with the specified user_id if no todo id is supplied, otherwise it returns the todo with the specified id and user_id."
      }
    },
    "/users": {
      "/": {
        "POST": "Takes in a new user in the format {username: string, password: string} and enters it into the database with an encrypted password.",
        "GET": "Returns all users as json in the format {user_id: number, username: string}."
      },
      "/:id": {
        "GET": "Returns one user with the specified id as json in the format {user_id: number, username: string}.",
        "PUT": "Takes in an updated user in the format {username: string, password: string}, checks that the correct password was supplied for that user, and updates the user record with the specified id.",
        "DELETE": "Deletes the user with the specified id. Requires that a valid Bearer token is supplied."
      },
      "/login": {
        "POST": "Takes in a user in the format {username: string, password: string} checks that the correct password was supplied and returns a token."
      },
      "/validate": {
        "POST": "Checks for a valid bearer token and returns a status 200."
      }
    }
  }
}
```
