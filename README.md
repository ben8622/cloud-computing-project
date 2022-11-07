# cloud-computing-project
- [Frontend Project Link](https://github.com/users/ben8622/projects/2)
- [Backend Project Link](https://github.com/users/ben8622/projects/3/views/1)
- [Other Project Link](https://github.com/users/ben8622/projects/5/views/1)

## Steps to deploy to GKE cluster (non-automated)
Pre-reqs:
- GKE enabled
- Cloud API and other APIs enabled for deployments _just enable as they come up_
- Dockerfile whos image creates a usable container

1. Go to the cluster _Kubernetes Engine > Clusters_  
![image](https://user-images.githubusercontent.com/60989905/198131323-33a3fcc2-f14a-4bc3-8c86-e61dad4315a1.png)

2. Open up the cluster you want to deploy to  
![image](https://user-images.githubusercontent.com/60989905/198131464-3e534a2b-d778-44fa-8969-f2cbd4356d9e.png)

3. Select "Deploy" at the top of the page
4. Select "New Container Image" and use the following information:  
  a. Repository Provider = "Github" _(must be authenticated)_  
  b. Repository = "ben8622/cloud-computing-project"  
  c. Dockerfile path = _this is dependant on your Dockerfile_  
   ![image](https://user-images.githubusercontent.com/60989905/198132071-a45d2bd3-e45c-4cdd-9cc0-4a79ad65b4fc.png)  
   
5. Hit "Continue" at the bottom
6. Change your application name to something descriptive such as "to-the-moon-frontend"
7. Change your label key to repressent this app's function in the system
![image](https://user-images.githubusercontent.com/60989905/198132619-dade4313-1f02-4024-ba41-aec81afe25f5.png)
8. Hit "deploy"

 
