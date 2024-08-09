let card = document.querySelector("#weather-card");
let input = document.querySelector("input");
let form  = document.querySelector("form");
let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let img =document.querySelector("img");
let para = document.querySelector("p");

const weatherapp = async(e)=>{
    e.preventDefault(); 
try {
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=a4cb33663f054e989c440901240908&q=${input.value}&days=10&aqi=yes&alerts=yes`);
const data = await response.json();
console.log(data);


    card.className="card rounded-0 my-2 p-3"; 
    h1.innerText = data.current.temp_c;
    h2.innerText = data.location.name;
    img.setAttribute("src", data.current.condition.icon);
    para.innerText = data.current.condition.text;



    const temp = data.current.temp_c;
    if (temp <= 0) {
        card.style.backgroundColor = "white"; 
    } else if (temp > 0 && temp <= 15) {
        card.style.backgroundColor = "red"; 
    } else if (temp > 15 && temp <= 25) {
        card.style.backgroundColor = "orange"; 
        
    }
    else if (temp >25 && temp <= 30){
         card.style.backgroundColor = "antiquewhite" 
         card.style.color = "black"    
    }    
    else {
        card.style.backgroundColor = "black";
        card.style.color = "white" 
    }
} catch (error) {
    card.className="card rounded-0 my-2 p-3 d-none"; 
    window.alert("invalid city name");

    
}
    form.reset()
 
}

form.addEventListener("submit",weatherapp);