First, local mongodb should be started.

node seedDb.js 
  - in root folder for seeding database for specific models with dummy data.
  - two types of users have been added, one authorized by company and one normal user which is not allowed to login but he has registered the jobs and proposals.
  - Users passwords are hashed in the database for security reasons. Current saved users from seedDb script (wiresample, deltasoldier) have password "wirepass". New users can be created using the router with passport registration ('/register') using postman or other methods of http requests.

npm run start - for starting the server. 
