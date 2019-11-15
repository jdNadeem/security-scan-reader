## Pre-requisites
- NodeJS
- MongoDB
- docker
- docker-compose

# Make Sure
- port 27017 is empty
- port 3000 is empty
- port 5000 is empty

# backend (api)
- GET: `url: /` - return list of all security scans
- GET: `url: /scan/:id` - return a specific security scan
- POST: `url: /scan` - create a new specific security scan

# frontend (dashboard)
- `url: /` - return list of all security scans
- `url: /scan/:id` - return a specific security scan
- `url: /scan` - create a new specific security scan

# Run the app by running these commands from the root folder
- docker-compose build
- docker-compose up