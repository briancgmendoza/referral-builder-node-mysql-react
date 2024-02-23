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
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/ca20c72f-7cec-481a-8fff-d9c81db35d3e)

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
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/d256d490-21e6-4b4d-ba8a-697912cdc962)


 
## Sending request through POSTMAN
## Note: You can use http://localhost:YOUR_PORT_IN_.ENV/ENDPOINT
- Get all users
- Endpoint: /users
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/0301357e-00f9-43a5-844a-eab01b38c8bf)

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
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/dc9e7c14-8c02-48f8-ae48-79ef10dfe884)

- Update User
- Endpoint: /update-user/:userId
- params: userId: number
- body - formData: {
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
    "avatar_image": LOCATE_YOUR_FILE
}
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/5217b9ef-d09b-4fe7-a6bf-ce35f1fd7024)

- Delete User
- Endpoint: /user/:userId
- params: userId: number
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/77d1283d-ba6f-4637-8aad-8de7cabea0b9)


## App running on local machine:

Running the app in local
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/0403de78-b618-4cbd-8e4d-b29d567b2a8b)

Initial Page
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/0b18a44b-1747-44b1-92ff-0ba0ff393584)

Page with data:
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/d82689ad-e7be-4b03-9103-bc247087488e)


Add User: 
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/3b3988dc-7de0-4f16-b3ad-2b4f6f7777b7)

Add User (Success):
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/d00e6aaf-e3c6-46ce-922f-47aac59e1590)

Add User (Validation):
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/17d3a861-c081-4dd1-b630-8b7cf726018e)

Updating user profile (Initial load):
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/6ccb28da-4f19-456e-9c4d-3b38df703efe)

Updating user profile (Updating phone number and uploading avatar):
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/e4cfc6fd-3d59-4635-9aca-43fa742d3e0f)

Update user profile (after update):
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/7aaa0c89-7956-4a05-9399-19e4f577aa33)

Deleting User:
![image](https://github.com/briancgmendoza/referral-builder-node-mysql-react/assets/89129699/1797ad6e-d5df-4463-846d-a6b011478aac)


**Brian Christopher Mendoza**
