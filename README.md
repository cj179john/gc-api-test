# GC App API

API for GC application

## Environment

Node 10.17.0
ExpressJS 4.0.0

## Database

Not yet implemented. It has relationships as follow:

User (1 - *) Post
Post (1 - *) Comment

If the relations stands, We can either use a relational / document-base DB, as they can be embedded within their parent object

By default, the application is configured to start on port 3009.

## Installation

```bash
yarn
```

## Starting the Application

```bash
yarn start
```

## Testing the Application

```bash
yarn test
```

## Endpoints

```bash
GET /api/users

Fetch all users
```

```bash
GET /api/posts?userId=user_id

Fetch all posts of a user
```

```bash
GET /api/comments?postId=post_id

Fetch count of all comments of a post
```

## Cross Origin Resource Sharing - CORS
Currently this API accepts all the connections. It should be locked down to only allow specific connections


