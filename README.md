# Staff Schedule Viewer

Full stack app to visualize staff schedule on weekdays

## Requirements

- Node.js
- Docker

## Database - MongoDB

This project uses MongoDB as the database, running locally as a Docker container.

Run the following code in a terminal to spin up MongoDB as a Docker container:

- `docker pull mongodb/mongodb-community-server`

- `docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:latest`

Since it's a test application running in localhost, no authentication will be configured.

## Backend - Fastify (Node.js)

This project uses Fastify as the backend, loading initial seed data from JSON files to MongoDB on startup.

To start the API, navigate to the _backend_ folder and run the following commands:

- `npm i`

- `npm start`

At this point, you should see messages at the console, confirming server is up and running:

> _"Server listening at http://127.0.0.1:3000"_ / _"Connected to MongoDB database"_ / _"Seed data uploaded successfully"_

Two endpoints are exposed for data fetch: /GetCooks and /GetWaiters. You can check them by clicking the links below:

- http://localhost:3000/GetCooks

- http://localhost:3000/GetWaiters
