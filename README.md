# Devops Toolbox Agent

## Install all dependencies
`npm install` or `yarn install` 

## Run
### **Example:**
```./devops-toolbox-agent-macos --SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""```   
or  
```start devops-toolbox-agent-win.exe '--SCHEDULE="* * * * *" --TOKEN="" --NGINX_DIR=""'```

The running command requires 3 parameters:

Parameter  | Is required | Description
-----------|-------------|------------
`TOKEN`    |+            |Authorization token of server
`SCHEDULE` |+            |Cron schedule for running 
`NGINX_DIR`|- (default: `/etc/nginx`)|Path to nginx service on server

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

### Examples
0 0 * * * * - Every day at midnight   
0 0 * * 3 * - Every wednesday at midnight   
\* * * 1,2,3 * * - Every minute in january, february and march   
0 9 1-7 * 1 * - First monday of every month at 9 am


## How to get binaries:

1) Build a project: `npm run build`
2) Create binaries: `npm run package`

## Help

To get additional help run `yarn start --help`
