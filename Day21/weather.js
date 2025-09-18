// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// let key = "726177798ae89d7b12641c60269531b3";
// let key = "13e4be386cb68f303423c86024477cc4";

let temperature = document.querySelector(".temperature");
let input = document.querySelector('input');
let btn = document.querySelector('button');

// Rupesh sir's api key
let key = "9f6290d6cda9a36a63755fadee71f83d";

btn.addEventListener("click", ()=>{
    let city = input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`).then((data)=>{
        return data.json();
    }).then((res)=>{
        console.log(res);
        show(res);
    })
})

function show(res){
    temperature.innerHTML = null;
    let max = res.main.temp_max - 273.15
    let min = res.main.temp_min - 273.15
    let h21 = document.createElement('h2')
    let h22 = document.createElement('h2')
    h21.innerText = "Max Temperature: " + max;
    h22.innerText = "Min Temperature: " + min;
    temperature.append(h21,h22);
}