## Getting ready to setup MERN-CRUD APP

### Setting Up Server
1. Make sure you have installed xampp already
2. Start apache and mysql 
3. Make a database in phpmyadmin with name ```crudmern1```
4. Note: You can change the db name, make sure to change the configurtaions aswell

### Installing all dependencies

1. Open this root directory, which is MERN-CRUD. 
2. You will find 2 directories, backend, frontend and package.json
3. run ``` npm install ``` command in root directory
4. now install both backend and frontend dependancies

#### Backend dependencies
1. Change the directory in your terminal using ```cd Backend``` command
2. run ``` npm install ``` command in backend directory

#### Frontend dependencies
1. Change the directory in your terminal using ```cd frontend``` command
2. run ``` npm install ``` command in backend directory

### Run CRUD APP
1. Go to root directory
2. Run ```npm run start-server``` to start both frontend and backend
3. If you have trouble with the above command, run ```npm run start``` in frontend directory and ```npm run dev``` in backend directory