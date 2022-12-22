# A local network of multiple servers for a Fully Automated Production Ready NodeJS app deployment


- Created a network of 5 Linux VMs, each for a different service: Git, Jenkins, NodeJS app: 1 Frontend and 2 Backend servers

- Infra as Code: Fully automated provisioning of all the VMs using Vagrant

	- All the VMs provisioned with their own IP address to be part of the same network 

- Ansible: Automated configuration management for all the VMs using Ansible roles and playbook

- Jenkins: End-to-end CI/CD via a scripted pipeline for an automated deployment of the demo NodeJS app setup

	- Periodically checkout code from the git repository

	- Build stage: Install the npm dependencies

	- Test stage: Simulate running a test on the app for every new commit in the github repo

	- Deploy stage: Using the ssh keys, sync the app repo in the 2 backend servers with the github repo and run the Nodejs app in both the servers



-NodeJS app setup: 

- Imitating a real-world scenario for the app setup with a frontend server for handling the incoming requests and 2 backend servers for redundancy and fault tolerance

- Frontend server: Nginx reverse proxy server configured for load balancing to the backend servers 
                   
- Backend servers: 2 servers running the identical demo Nodejs app at port 3000
 


Refer to the "Overall_Architecture.jpg" for a visual of the network setup


---------------------------------------------------------------------------------------------------------------------------

Note to self: The github remote is named "github" NOT "origin"
