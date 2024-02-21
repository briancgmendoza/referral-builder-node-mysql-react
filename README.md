# Referral Builder App
 
## How to use the app

 Steps on cloning the app, installing project dependencies and creating db on local machine:
 - Open your terminal
 - Clone the application
 - Cd inside the project
 - Install dependencies by executing "npm i"
 - Creating db on your local machine. In my case, I am using workbench.
 - Locate the create-db.sql script, it should be in Server/databases/sql-scripts
 - Then follow the screenshot below:
 - ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/ca20c72f-7cec-481a-8fff-d9c81db35d3e)

Steps on how to install project dependencies for Frontend (client)
- Open your terminal
- Cd inside the project
- Cd into Client
- Install dependencies by executing "npm i"

Steps on how to run the project:
- Open your terminal
- Cd inside the project, you should be in the parent folder.
- Execute the command: "npm run dev" to run both Server and Client
- Execute the command: "npm run server" to run only the Server
- To run only the Frontend (client), cd inside Client
- Execute the command: "npm run dev"
 
## Important
For the project to run, you should have the ff:
- You should have a local database on your machine by following the steps above.
- You should have an .env file created with, values can be found when connecting to your local db, which can be found here:
PORT=
DB_HOST=localhost
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_NAME=userdb
- ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/d256d490-21e6-4b4d-ba8a-697912cdc962)


 
## Sending request through POSTMAN
## Note: You can use http://localhost:YOUR_PORT_IN_.ENV/ENDPOINT
- Get all users
- Endpoint: /users
- ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/0301357e-00f9-43a5-844a-eab01b38c8bf)

- Add user
- Endpoint: /add-user
- body: {
    "given_name": "Test",
    "surname": "Mendoza",
    "email": "qweqweqw@gmail.com",
    "phone": "+639773722289",
    "house_no": "3966",
    "street": "Main St",
    "suburb": "Anytown",
    "state": "Stateful",
    "postcode": "00001",
    "country": "PH",
    "avatar_image": null
}
- ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/dc9e7c14-8c02-48f8-ae48-79ef10dfe884)

- Update User
- Endpoint: /update-user/:userId
- params: userId: number
- body: {
    "given_name": "Brianna Persephone",
    "surname": "Mendoza",
    "email": "qweqweasdasda@gmail.com",
    "phone": "+639773722289",
    "house_no": "007",
    "street": "Main St",
    "suburb": "Anytown",
    "state": "Stateful",
    "postcode": "00001",
    "country": "PH",
    "avatar_image": null
}
- ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/5217b9ef-d09b-4fe7-a6bf-ce35f1fd7024)


- Delete User
- Endpoint: /user/:userId
- params: userId: number
- ![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/77d1283d-ba6f-4637-8aad-8de7cabea0b9)


**Brian Christopher Mendoza**
