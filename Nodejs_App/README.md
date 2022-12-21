
Contains the demo NodeJs app with a simple test for an automated deployment using Jenkins

 - App uses an Nginx reverse-proxy server that load balances the incoming traffic b/w the two backend NodeJs app servers

The test is a dummy test which doesn't really do much (purely for learning purposes, its always going to pass)

Jenkinsfile contains the pipeline script for an automated deployment of the app setup via Jenkins, with 3 stages:
 
 - Build: Install the npm dependencies

 - Test: Simulate running a test on the newly committed version in the github repo
 
 - Deploy: Use the ssh keys to sync the app repo in the 2 backend servers with the Jenkins workspace repo pulled from github            and run the Nodejs app (which can be accessed at "http://nodejs.devops.esc.sh/")

