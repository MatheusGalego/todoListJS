# Task Management RESTful API

A RESTful API for task management built with Node.js, Express, and MongoDB using Mongoose. The project utilizes modern JavaScript ES Modules syntax and follows clean architectural patterns for CRUD operations.

---

## Features

- Full CRUD operations for tasks (Create, Read, Update, Delete)
- Data validation and schema constraints enforced via Mongoose
- CORS enabled for cross-origin client integration
- Consistent HTTP status codes and error responses
- Built using JavaScript ES Modules (import/export syntax)

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Tooling:** CORS, Nodemon

---

## Project Structure

```text
├── src/
│   ├── models/
│   │   └── taskModel.js     # Task Mongoose schema and model definition
│   └── routes/
│       └── taskRoutes.js    # Task route endpoints and logic
├── app.js                   # Express application setup and middlewares
├── server.js                # Database connection and server bootstrap
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed locally:
- **Node.js** (v18.0.0 or higher recommended)
- **npm**
- **MongoDB Community Server** running locally on port 27017 (or a MongoDB Atlas connection string)

### Installation and Setup

1. Clone the repository:
```bash
git clone [https://github.com/your-username/todolistjs.git](https://github.com/your-username/todolistjs.git)
cd todolistjs
```

2. Install dependencies:
```bash
npm install
```

3. Start the MongoDB service:
Ensure your local MongoDB daemon is running on `mongodb://localhost:27017`.

4. Run the application:
```bash
npm start
```

The server will run on:
```text
http://localhost:3000
```

---

## API Endpoints

Base URL: `http://localhost:3000/tasks`

| Method | Endpoint | Description | Status Code |
| :--- | :--- | :--- | :--- |
| GET | `/tasks` | Retrieve all tasks | 200 OK |
| GET | `/tasks/:id` | Retrieve a single task by ID | 200 OK / 404 Not Found |
| POST | `/tasks` | Create a new task | 201 Created / 400 Bad Request |
| PUT | `/tasks/:id` | Update an existing task by ID | 200 OK / 404 Not Found |
| DELETE | `/tasks/:id` | Delete a task by ID | 200 OK / 404 Not Found |

---

## Request and Response Examples

### Create a Task (`POST /tasks`)

**Headers:**
```text
Content-Type: application/json
```

**Request Body:**
```json
{
  "title": "Build REST API documentation",
  "description": "Document all routes, schema rules, and setup steps in README.",
  "status": "pendente"
}
```

**Response (`201 Created`):**
```json
{
  "_id": "67069a19c5b6b13e8b4e1234",
  "title": "Build REST API documentation",
  "description": "Document all routes, schema rules, and setup steps in README.",
  "status": "pendente",
  "createdAt": "2026-10-09T14:30:00.000Z",
  "__v": 0
}
```

---

### Update a Task (`PUT /tasks/:id`)

**Request Body:**
```json
{
  "status": "concluido"
}
```

**Response (`200 OK`):**
```json
{
  "_id": "67069a19c5b6b13e8b4e1234",
  "title": "Build REST API documentation",
  "description": "Document all routes, schema rules, and setup steps in README.",
  "status": "concluido",
  "createdAt": "2026-10-09T14:30:00.000Z",
  "__v": 0
}
```

---

### Validation Error (`400 Bad Request`)

Occurs if required fields are missing or constraints are violated (e.g., `title` with fewer than 3 characters):
```json
{
  "message": "Task validation failed: title: Path `title` (`ab`) is shorter than the minimum allowed length (3)."
}
```

---

## Data Schema

| Field | Type | Required | Constraints / Default |
| :--- | :--- | :--- | :--- |
| `title` | String | Yes | Min: 3 characters, Max: 50 characters |
| `description` | String | No | Max: 500 characters |
| `status` | String | No | Default: `"pendente"` |
| `createdAt` | Date | No | Default: `Date.now` |

---
