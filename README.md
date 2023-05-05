# Staff Schedule Viewer

Full stack app to visualize staff schedule on weekdays

## Requirements

- Node.js
- Docker

## Database - MongoDB

This project uses MongoDB as the database, running locally as a Docker container.

Run the following code in a terminal to spin up MongoDB as a Docker container:

`docker pull mongodb/mongodb-community-server`

`docker run --name mongo -p 27017:27017 -d mongodb/mongodb-community-server:latest`

Since it's a test application running in localhost, no authentication will be configured.