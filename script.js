let data;

const weather = async (city) => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=64f831a08ae9bf2795467495abea233e");
    data = await response.json();
    return data;
}

const showDetails = () =>{
    let tempc = (parseFloat(data.main.temp)-273.15).toFixed(2);
    document.getElementById("cityn").innerHTML=data.name;
    document.getElementById("temp").innerHTML=tempc;
    document.getElementById("tempb").innerHTML=tempc;
    document.getElementById("weather").innerHTML=data.weather[0].description;
    document.getElementById("humidity").innerHTML=data.main.humidity;
    document.getElementById("wind").innerHTML=data.wind.speed;
}

document.getElementById("myForm").addEventListener("submit", async function(event){
    event.preventDefault(); 

    let city = document.getElementById("city").value;

    if(city.trim() === '') {
        alert("Please enter city name.");
        return false;
    }

    try {
        const data = await weather(city);
        showDetails();

    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Failed to fetch weather data. Please try again later.');
    }
});
