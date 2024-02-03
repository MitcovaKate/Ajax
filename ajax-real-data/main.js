 let city
function chooseCity(selectedCity) {
          console.log(selectedCity)
          city=selectedCity
                                  }
const key="6adea21c1fc0a56d8b17ab716f6812eb"
const CURRENT_DATA_URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6adea21c1fc0a56d8b17ab716f6812eb`


function createRadioButtons() {
     const elements = ["Chisinau", "Paris", "New York"]
     const inputs = document.getElementById("inputs")

     elements.forEach((element) => {
     const label = document.createElement("label")
     label.textContent = element
     label.setAttribute("for", element)

     const input = document.createElement("input")
     input.id = element
     input.type = "radio"
     input.style = "display:block;padding:20px;margin:10px;"

     input.addEventListener("change", () => {
         if (input.checked) {
        chooseCity(input.id)
                            }
    }
    )

    inputs.append(label)
    inputs.append(input)
  }
  );
}


createRadioButtons();



function loadWeatherData()
{
  let xml=new XMLHttpRequest()
  xml.open("GET",CURRENT_DATA_URL)
  xml.onload =function(){ 
  let data=JSON.parse(xml.response)
  let temp=data.main.temp
  let wind=data.wind.speed
  let description=data.weather[0].description
  let icon=data.weather[0].icon
  // console.log(data)
  //  console.log(temp)
  //  console.log(wind)
  //  console.log(description)
  //  console.log(icon)
let html=document.createElement('div')
let h1=document.createElement('h1')
h1.innerText='temperature:'+ temp
let h2=document.createElement('h2')
h2.innerText= description
let p=document.createElement('p')
p.innerText="wind speed: "+wind+ "m/s"
let img=document.createElement('img')
img.src=`http://openweathermap.org/img/wn/${icon}2x.png`


  html.append(h1)
  html.append(h2)
  html.append(p)
  html.append(img)
  document.querySelector('.weather').append(html)
 }
 
xml.send()
 
}