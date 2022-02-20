Name: Fabrice Mikobi

# Server startup
- Start the mongo daemon 
- Run the database initiliazer file by typing the command `node database-initializer.js` in the terminal
- Install project dependencies using `npm install`
- Start the server by running `node server.js` in the terminal and go to http://localhost:3000 to interact with the webpage
 


#### Design decisions ####

- I used mongoose because of the flexibility it offers compared to regular MongoDB, including specifying Models 
- I considered using routers but ran out of time so I stored all the routes on the server.js file
- I tried to make the page visually appealing to the client with matching colours and colour change on hover CSS properties. Also, added a favicon to make it look more professional 