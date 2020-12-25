# Devops Toolbox Agent

## Install all dependencies
`npm install` or `yarn install` 

## Run
### **Example:**
`./devops-toolbox-agent-macos --SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""`   

The running command requires 3 parameters:  
_SCHEDULE_:  
\* * * * * *   
| | | | | |   
| | | | | +--- Years            (range: 1900-3000)  
| | | | +----- Days of week     (range: 1-7)  
| | | +------- Months           (range: 1-12)  
| | +--------- Days of months   (range: 1-31)  
| +----------- Hours            (range: 0-23)  
+------------- Minutes          (range: 0-59)  
_TOKEN_  
_NGINX_DIR_(optional)

_SCHEDULE_ is Cron schedule, _TOKEN_ is Server token.


## How to get binaries:

1) Build a project: `npm run build`
2) Create binaries: `npm run package`

## Help

To get additional help run `yarn start --help`
