// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();


//Base URL for API 
// Personal API Key for OpenWeatherMap API

const baseURL = "https://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = ",us&appid=8ebe217698948ff62581f692959aeb2a&units=imperial";

// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener("click", performAction);

/* Function called by event listener */
function performAction(e){
  const feeling = document.getElementById('feelings').value;
  const zipCode = document.getElementById('zip').value;
  getZip(baseURL,zipCode,apiKey)

  .then(function(data){
    console.log(data);
    postData('/add', {date:newDate,temp:data.main.temp,feel:feeling});
})
.then(function() {
  updateUI();
})
}

/* Function to GET Web API Data*/
const getZip = async (baseURL ,zip, apiKey)=>{
  const res = await fetch(baseURL+zip+apiKey)
  try {

    const data = await res.json();
    console.log(data)
    return data;
  }catch (error) {
    console.log("error", error);
  }
};



/* Function to POST data */
const postData = async (url = '', data = {}) =>{
  console.log("postData Function running", data);

  const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

  try {
    const newData = await response.json();
    console.log(newData)
    return newData
    
  }catch(error){
    console.log('error',error)
  }
};




/* Function to GET Project Data */
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const newData = await request.json();
    console.log(newData)
    document.getElementById('date').innerHTML = `Date: ${newDate}`;
    document.getElementById('temp').innerHTML = `Temperature: ${newData.temp}`;
    console.log(newData);
    document.getElementById('content').innerHTML =`My feelings are: ${newData.feel}`;
    
  }catch (error){
    console.log('error error ');
  }
}