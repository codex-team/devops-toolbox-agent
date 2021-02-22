# DevOps Toolbox Agent
This application (as part of DevOps Toolbox) working on the server, collects information about services and sends them to the [server](https://github.com/codex-team/devops-toolbox-api), which operates with the [client](https://github.com/codex-team/devops-toolbox-app) application.

[Download](https://github.com/codex-team/devops-toolbox-agent/releases/latest/download/devops-toolbox-agent) for Linux. 
Releases and changes [page](https://github.com/codex-team/devops-toolbox-agent/releases/latest).


## Run

The running command requires 3 parameters:

Parameter  | Description | |
-----------|-------------|------------
`TOKEN`    | Authorization token of server | required
`SCHEDULE` | Cron schedule for running | required
`NGINX_DIR`| Path to nginx service on server |

*default ```NGINX_DIR = /etc/nginx```*

*cron schedule [template](https://crontab.guru)* 
### Example:

```shell
./devops-toolbox-agent-macos --SCHEDULE="* * * * *" --TOKEN="server_token" --NGINX_DIR="/etc/nginx"
```
or  
```powershell
start devops-toolbox-agent-win.exe '--SCHEDULE="* * * * *" --TOKEN="server_token" --NGINX_DIR="./"'
```

### Other parameters (.env)

#### API address

You can also build binaries with your own api address. Add `API_URL` variable to `.env` file like this:
```dotenv
# API url to which we send current services on the server
API_URL=https://api.toolbox.codex.so/services
```
