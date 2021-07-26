
    server {
        listen       80;
        server_name  localhost;

        location = / {
            try_files $uri $uri/ /index.html;
        } 
        location = /login.html {
            try_files $uri /index.html;
        }

        location /service/ {
            proxy_pass ${BACKEND_URL};  
            proxy_http_version 1.1;
            proxy_pass_request_headers on;
            proxy_ignore_client_abort on;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            client_body_buffer_size 128k; 
            proxy_redirect off;
            proxy_connect_timeout   800;
            proxy_send_timeout      800;
            proxy_read_timeout      800;
            send_timeout            800;
            fastcgi_connect_timeout 800;
            fastcgi_send_timeout    800;
            fastcgi_read_timeout    800;
            proxy_temp_file_write_size 256k;
            proxy_next_upstream http_502 http_504 error invalid_header; 
        }
  

	    location ~* \.(gif|jpg|jpeg|png|html|css|js|ico|json|eot|svg|ttf|woff|woff2|docx|doc)$ {
            root   html;
        }

	    location ~* \.(htm|html)$ {
            root   html;
            expires -1;
        }        

        

        
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

         location / {
            root   html;
            try_files $uri $uri/ /index.html;
        }
    }