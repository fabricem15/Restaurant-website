# Overview 
An Express-based full stack web application where users can browse from a variety of restaurants, add meals to their cart and place their order. 

# Features
- The backend uses Express to run the application, serve static files and render HTML pages.
- Pug is used as the Template Engine for this website.
- Uses Mongoose and MongoDB for the database.
- REST API 

**Note: The website is only available locally at the moment. I will be hosting it online soon. Stay tuned for a demo!** 


# Server startup (to be run locally)
- Start the mongo daemon 
- Run the database initiliazer file by typing the command `node database-initializer.js` in the terminal
- Install project dependencies using `npm install`
- Start the server by running `node server.js` in the terminal and go to http://localhost:3000 to interact with the webpage
 


#### Design decisions ####

- I used mongoose because of the flexibility it offers compared to regular MongoDB, including specifying Models 
- I tried to make the page visually appealing to the client with matching colours and colour change on hover CSS properties. Also, added a favicon to make the website look more professional. 
