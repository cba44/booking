# Booking System README

## System Requirements

You'll need to have latest versions of **docker** and **docker compose** installed on your machine.\
[Install Docker](https://docs.docker.com/engine/install/)\
[Install Docker Compose](https://docs.docker.com/compose/install/)

## How To Run Locally

- Open the terminal(Command Prompt / Powershell for Windows) in the same folder as this README file.
- The project can be run with docker compose in the terminal using
```
docker compose up -d
```
- Now, the frontend application is running on port **80** and backend application is running on port **3000**.
- Open [http://localhost](http://localhost) in the browser.
### Port Conflicts
- In case of port conflict for frontend, change following in **docker-compose.yml** under **booking-frontend** service.
```
    ports:
      - "{NEW_PORT}:80"
```
- In case of port conflict for backend, 2 changes have to be done.
1. Change following in **docker-compose.yml** under **booking-backend** service.
```
    ports:
      - "{NEW_PORT}:3000"
```
2. Change **booking-frontend/.env.production** file.
```
VITE_APP_BASEURL=http://localhost:{NEW_PORT}
```
3. Build again using
```
docker compose build booking-frontend
```