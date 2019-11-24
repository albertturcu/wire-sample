First, local mongodb should be started.

node seedDb.js 
  - in root folder for seeding database for specific models with dummy data.
  - two types of users have been added, one authorized by company and one normal user which is not allowed to login but he has registered the jobs and proposals.

npm run start - for starting the server. 

variables needed in .env file are: 
  - NODE_ENV="development"
  - MONGODB_URI=""
  - MONGODB_URI_LOCAL="" (for development only MONGODB_URI_LOCAL is needed)
  - SESSION_SECRET=""
  - PASSPORT_SECRET=""
  - PORT=3502 (specific port, it is set as proxy in angular project)
