# Weather Journal App

## Project Title
weather_journal_project

This is a simple web application project that allows users to retrieve weather information based on geographic coordinates and record their feelings for a specific date.

For this RMIT project the co-ordinates sent to the API are pre-filled.

## Usage

The Weather Journal App fetches weather data from the OpenWeatherMap API and displays it on the webpage along with the user's inputted feelings. Users can enter a zip code, their feelings, and click the "Generate" button to see the weather details and their feelings. The most recent entry is displayed below.

## Dependencies

- `express`: Web server framework for Node.js.
- `body-parser`: Middleware for parsing request bodies.
- `cors`: Middleware for enabling CORS (Cross-Origin Resource Sharing).
- `node-fetch`: Library for making HTTP requests in Node.js.

## How to Run the App

1. Clone or download this repository to your local machine.
2. Open your terminal and navigate to the project's root directory.

### Installation

3. Run the following command to install the required dependencies:

npm install

#### Running the Server

Start the server by running:

npm start

This will start the Express server, and the app will be accessible at http://localhost:3000.

##### Using the App
Open a web browser and navigate to http://localhost:3000.

Enter a zip code and your feelings in the respective input fields.
Note: location data passed to the API is pre-set in app.js as:
let latt = '-27.470125';
let long = '153.021072';

Click the "Generate" button to retrieve weather information and display it on the page along with your feelings.

The most recent entry will be displayed below the weather information.

###### Acknowledgments
This app was created as a project for Udacity's Front End Web Developer Nanodegree.
