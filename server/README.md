First, local mongodb should be started.

node seedDb.js 
  - in root folder for seeding database for specific models with dummy data.
  - two types of users have been added, one authorized by company and one normal user which is not allowed to login but he has registered the jobs and proposals.
  - User password is hashed in database for security. Current saved users from seedDb (wiresample, deltasoldier) have password "wirepass". New users can be created using the router with passport registration ('/register') using postamn or other methods of http requests.

npm run start - for starting the server. 
