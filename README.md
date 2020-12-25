# Devops Toolbox Agent

## Install all dependencies
`npm install` or `yarn install` 

## Run
### **Example:**
`./devops-toolbox-agent-macos --SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""`    
`start devops-toolbox-agent-win.exe --SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""`

The running command requires 3 parameters:  
_SCHEDULE_:  
### Allowed fields

```
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
```

### Allowed values

|     field    |        value        |
|--------------|---------------------|
|    second    |         0-59        |
|    minute    |         0-59        |
|     hour     |         0-23        |
| day of month |         1-31        |
|     month    |     1-12 (or names) |
|  day of week |     0-7 (or names, 0 or 7 are sunday)  |
_TOKEN_  
_NGINX_DIR_(optional)

_SCHEDULE_ is Cron schedule, _TOKEN_ is Server token.


## How to get binaries:

1) Build a project: `npm run build`
2) Create binaries: `npm run package`

## Help

To get additional help run `yarn start --help`
