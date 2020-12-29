# DevOps Toolbox Agent

## Install all dependencies
`npm install` or `yarn install` 

## Run
### **Example:**

```shell
./devops-toolbox-agent-macos --SCHEDULE="* * * * *" --TOKEN="server_token" --NGINX_DIR="/etc/nginx"
```
or  
```powershell
start devops-toolbox-agent-win.exe '--SCHEDULE="* * * * *" --TOKEN="server_token" --NGINX_DIR="./"'
```

The running command requires 3 parameters:

Parameter  | Is required | Description
-----------|-------------|------------
`TOKEN`    |+            |Authorization token of server
`SCHEDULE` |+            |Cron schedule for running 
`NGINX_DIR`|- (default: `/etc/nginx`)|Path to nginx service on server

### Cron schedule documentation
#### Allowed fields

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

#### Allowed values

|     field    |        value        |
|--------------|---------------------|
|    second    |         0-59        |
|    minute    |         0-59        |
|     hour     |         0-23        |
| day of month |         1-31        |
|     month    |     1-12 (or names) |
|  day of week |     0-7 (or names, 0 or 7 are sunday)  |

#### Examples

0 0 * * * * - Every day at midnight   
0 0 * * 3 * - Every wednesday at midnight   
\* * * 1,2,3 * * - Every minute in january, february and march   
0 9 1-7 * 1 * - First monday of every month at 9 am

## API address

You can also build binaries with your own api address. Add `API_URL` variable to `.env` file like this:
```dotenv
# API url to which we send current services on the server
API_URL=https://api.toolbox.codex.so/services
```

## How to get binaries:

1) Build a project: `yarn build`
2) Create binaries: `yarn package`

## Help

To get additional help run `yarn start --help`
