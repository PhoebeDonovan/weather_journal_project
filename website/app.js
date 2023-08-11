// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth() + 1) + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apiKey = '78364b8fc5d6f35a6b11bef7bede2b5d';
let latt = '-27.470125';
let long = '153.021072';

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', generateButtonClicked);

/* Function called by event listener */
/* Function to GET Web API Data */
/* Function to fetch weather data*/
function generateButtonClicked() {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latt}&lon=${long}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      // Handle the response
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Error: ' + response.status);
      }
    })
    .then((data) => {
      console.log(data);
      // Process the retrieved data
      const temperature = data.main.temp;
      const feelings = document.getElementById('feelings').value;

      // Update the DOM elements
      document.getElementById('date').innerHTML = `Date: ${newDate}`;
      document.getElementById('temp').innerHTML = `Temperature: ${temperature} °C`;
      document.getElementById('content').innerHTML = `Feelings: ${feelings}`;
    })
    .catch((error) => {
      console.log(error);
    });
}

/* Function to POST data */
// Client-side function to make a POST request and add an entry
async function addEntry(url, entryData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entryData),
    });

    if (response.ok) {
      console.log('Entry added successfully');
    } else {
      throw new Error('Error: ' + response);
    }
  } catch (error) {
    console.log(error);
  }
}
