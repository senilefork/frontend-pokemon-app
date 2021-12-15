                  
# Pokemon Project  

### Description:  

**Backend:** The backend for this project is an API wrapper built with Node.js and Express. The Express server queries a public Pokemon API (link to original Pokemon API [here](at "https://pokeapi.co/")) and builds an object containing only relevent Pokemon data to be sent to the frontend React application. The backend application was deployed seperately from the frontend. The code can be seen here: [Link to backend code]( "https://github.com/senilefork/pokemon-backend"). 

**Frontend:** The frontend for this project was built in React and CSS. There is a small model called *pokemonAPI* which can be found in the *src* directory. This model builds a useful method to make API calls. While not entirely necessary in this particular instance, this is something I like to do especially with bigger applications because it helps keep the frontend code from getting too cluttered with urls. [Link to frontend application]( "fascinated-soup.surge.sh").

**Install and Run:**   
npm install  
npm start

**How to Use the Application:** The application renders a simple table of Pokemon characters with infinate scroll. The user can use the search bar at the top to filter the list by character name and abilities. Clicking on the Pokemon image will display a list of Pokemon characteristics. 