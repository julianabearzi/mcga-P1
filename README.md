# Students API

## What is about?

An API Rest of students. Project made for a MCGA exam.

## Technology Stack

- Node.js
- Express
- Mongoose

## Getting Started

- Clone the repository

```
git clone https://github.com/julianabearzi/mcga-P1.git
```

- Install dependencies

```
cd mcga-P1
npm install
```

- Build and run the project

```
npm start
```

Navigate to `http://localhost:5000`

If you create environment variables in an .env file, the server
will run in `your port`

## Deployed on Heroku

Try it [here](https://mcga-p1.herokuapp.com/)

## Request & Response Examples

### API Resources

- [GET /students](#get-students)
- [GET /students/[id]](#get-studentsid)
- [GET /students/search](#get-studentssearchturnafternoon)
- [POST /students](#post-students)
- [PUT /students/[id]](#put-studentsid)
- [DELETE /students/[id]](#delete-studentsid)

### GET /students

Response body:

    {
       "data": [
        {
            "_id": "615f94042108318c0330951f",
            "name": "Alex",
            "lastName": "Perez",
            "age": 19,
            "course": "Node.js",
            "turn": "morning",
            "amount": 4000,
            "__v": 0
        },
        {
            "_id": "615f94612108318c03309522",
            "name": "Maria",
            "lastName": "Torres",
            "age": 21,
            "course": "Node.js",
            "turn": "afternoon",
            "amount": 4000,
            "__v": 0
        },
        {
            "_id": "615f962b674d29ab6b3d4c30",
            "name": "Peter",
            "lastName": "Garcia",
            "age": 25,
            "course": "Machine Learning",
            "turn": "morning",
            "amount": 5700,
            "__v": 0
        }
      ]
    }

### GET /students/[id]

Response body:

    {
       "_id": "61636709211dbdbe44517398",
       "name": "Emma",
       "lastName": "Johnson",
       "age": 18,
       "course": "Node.js",
       "turn": "morning",
       "amount": 5500,
       "__v": 0
    }

### GET /students/search?turn=afternoon

Response body:

    {
      "data": [
        {
            "_id": "615f94612108318c03309522",
            "name": "Maria",
            "lastName": "Torres",
            "age": 21,
            "course": "Node.js",
            "turn": "afternoon",
            "amount": 4000,
            "__v": 0
        },
        {
            "_id": "61636739211dbdbe4451739a",
            "name": "Daniel",
            "lastName": "Miller",
            "age": 39,
            "course": "Machine Learning",
            "turn": "afternoon",
            "amount": 6750,
            "__v": 0
        }
      ]
    }

### POST /students

Request body:

    {
       "name": "Emma",
       "lastName": "Johnson",
       "age": 18,
       "course": "Node.js",
       "turn": "morning",
       "amount": 5500
    }

Response body:

    {
       "_id": "61636709211dbdbe44517398",
       "name": "Emma",
       "lastName": "Johnson",
       "age": 18,
       "course": "Node.js",
       "turn": "morning",
       "amount": 5500,
       "__v": 0
    }

### PUT /students/[id]

Request body:

    {
       "turn": "afternoon"
    }

Response body:

    "msg": "Student updated",
    "data": {
        "_id": "61636709211dbdbe44517398",
        "name": "Emma",
        "lastName": "Johnson",
        "age": 18,
        "course": "Node.js",
        "turn": "afternoon",
        "amount": 5500,
        "__v": 0
    }

### DELETE /students/[id]

Response body:

    "msg": "Student deleted",
    "data": {
        "_id": "61636709211dbdbe44517398",
        "name": "Emma",
        "lastName": "Johnson",
        "age": 18,
        "course": "Node.js",
        "turn": "morning",
        "amount": 5500,
        "__v": 0
    }

## Authors ✒️

- Juliana Bearzi
- Carla Massat
