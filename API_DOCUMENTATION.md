# Basic User Management APIs

## Available endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /list-users | Get all users |
| POST | /add-user | Create user |
| PUT | /update-user/:id | Update user |
| DELETE | /delete-user/:id | Delete user |

* GET '/list-users' - Lists all users from DB
* POST '/add-user' - Adds a new user
* PUT '/update-user/{id}' - Updates a user data completely with the new data
* PATCH '/update-user-{key-to-update}' - Updates a user's particular data
* DELETE '/delete-user/{id}' - Deletes a user

## List all available users

```
curl --location --request GET '{{baseURL}}/list-users'
```

## Add a new user

```
curl --location --request POST '{{baseURL}}/add-user' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "{Username}",
    "email": "{newuser@mail.com}",
    "password": "{password}"
}'
```

## Update a user completely

```
curl --location --request PUT '{{baseURL}}/update-user/{id}' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "{Updated Name}",
    "email": "{new@mail.com}",
    "password": "{new password}"
}'
```

## Update a particular field of a user

```
curl --location --request PATCH '{{baseURL}}/update-user-{key-to-update}/{id}' \
--header 'Content-Type: application/json' \
--data '{
    "{key-to-update}": "{Updated Value}"
}'
```

## Delete a user

```
curl --location --request DELETE '{{baseURL}}/delete-user/{id}'
```

## Variables
```
baseURL: "http://localhost:3000" - Development Host URL
```