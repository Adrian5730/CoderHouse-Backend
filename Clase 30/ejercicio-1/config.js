events {
}

http {
    include       mime.types;
    default_type  application/octet-stream;

    upstream node_app {
        server 127.0.0.1:8081;
        #server 127.0.0.1:8082;
        server 127.0.0.1:8082 weight=3;
    }

    server {
        listen       80;
        server_name  nginx_node;

        location /datos/ {
            proxy_pass http://node_app;
        }
    }
}
