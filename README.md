# Frontend-Interaction-Demonstration
Simple application to demonstrate querying Termserver back ends. Page is html with jQuery and bootstrap. Included is an example nginx configuration file as follows:

```
worker_processes  1;

events {
    worker_connections  1024;
}

http {
    include    mime.types;
    server {
        listen      8087;
        server_name localhost.ihtsdotools.org;

        location / {
            root /yourRoot/Frontend-Interaction-Demonstration/;
        }
        
        location /terminologyServer {
            proxy_pass https://dev-authoring.ihtsdotools.org/snowowl/snomed-ct/v2/MAIN/;
        }
    }
    
}
```

To setup the project simply clone this repository - update your nginx configuration with the above server block (altering the port as neccessary and the root to the folder) - and then visit local.ihtsdotools.org:portNumber.

You will need to be logged into https://dev-authoring.ihtsdotools.org/#/home in order to query the Termserver. 
