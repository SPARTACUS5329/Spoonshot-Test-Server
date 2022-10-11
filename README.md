# Spoonshot Test Server Side

Deployed version (crashing): [https://spoonshot-test.herokuapp.com/](https://)

**Steps to run on local**

-   `git clone https://github.com/SPARTACUS5329/Spoonshot-Test-Server.git`
-   `cd into the cloned directory`
-   `npm install`
-   `npm start`

**#In dev mode, the server will by default connect to local mongodb port 27017**

**#Make sure that the MongoDB local server is running**

**#For MongoDB Atlas, prod mode is needed or create a variable called DATABASE_URL and put the connection string**

## Structure

-   Models
    -   Each model (in this case 1) has its own file
    -   They are then compiled and exported as one in `index.js` in `models/`
-   Controllers
    -   Each controller has a different file and exported from `controllers/`
-   Config
    -   This folder includes the configurations for the connections
        -   MongoDB
        -   Axios for Google Books API
-   Routes
    -   Each class of route has a different file (in this case 1)
    -   They are then compiled and exported as one in `index.js` in `routes/`
