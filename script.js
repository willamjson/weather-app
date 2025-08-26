async function getWeather() {
  let city = document.getElementById("city").value;
  const apiKey = "a1e617925be140fa896131637252308";
  let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error("Shahar ka name nahi mila.");
    }
    let data = await response.json();

    document.getElementById("weatherBox").style.display = "block";
    document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").innerText = `${data.current.temp_c} °C`;
    document.getElementById("desc").innerText = `${data.current.condition.text}`;
   document.getElementById("icon").src = "https:"+ data.current.condition.icon;
   document.getElementById("humidity").innerText =`Humidity ${data.current.humidity} % `;
   document.getElementById("wind_mph").innerText = `${data.current.wind_mph} `;
   document.getElementById("wind_kph").innerText = `${data.current.wind_kph}`;
 let localDate = new Date(data.location.localtime);
let options = { weekday: "long" };
let dayName = localDate.toLocaleDateString("en-PK", options);
document.getElementById("nightday").innerText = dayName;

  } catch (error) {
    alert("Error: " + error.message);
  }
}




