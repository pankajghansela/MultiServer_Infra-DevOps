# A simple NodeJS Application with Frontend and Backend

This contains a simple nodejs application for deploying in a production kinda environment, to imitate a real-world load balacing scenario

Creates 3 separate Nginx servers:

 - 1 Frontend server: Nginx reverse-proxy server to load balance b/w the 2 backend servers 

 - 2 backend servers: Both servers running the same nodejs processes 