# Devops Toolbox Agent

## Install all dependencies
`npm install` or `yarn install` 

## Run
To run agent you should use `npm` or `yarn`.  
The running command requires 3 parameters:  
_API_URL_  
_SCHEDULE_  
_TOKEN_
_--NGINX_DIR_

Where _API_URL_ is API url to which we send current services on the server, _SCHEDULE_ is Cron schedule, TOKEN is Server token.

### **Example:**
`npm run start --API_URL="http://localhost:3000/services" --SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""`

# How to get binaries:

1) Build a project: `npm run build`
2) Create binaries: `npm run package`

# Help

To get additional help run `yarn start --help`
