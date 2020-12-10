// setting the deails animation
const detail = document.getElementsByClassName('detail')
// new confirmed caces
detail[0].style.backgroundImage = "linear-gradient(#FF4136,#FF4136,#FFDC00)"
// new deaths caces
detail[1].style.backgroundImage = "linear-gradient(#001f3f,#0074D9,#0074D9)"
// new recevored caces
detail[2].style.backgroundImage = "linear-gradient(#2ECC40,#2ECC40,#01FF70)"

// total confirmed caces
detail[3].style.backgroundImage = "linear-gradient(#FF4136,#FF4136,crimson)"
// total Deaths caces
detail[4].style.backgroundImage = "linear-gradient(#001f3f,#001f3f 50%,#0074D9)"
// Total recevored caces
detail[5].style.backgroundImage = "linear-gradient(#FFFFFF,#2ECC40 50%,#FFFFFF)"

const newConfirmed = document.getElementById('newConfirmed')
const newDeaths = document.getElementById('newDeaths')
const newRecovered = document.getElementById('newRecovered')
const totalConfirmed = document.getElementById('totalConfirmed')
const totalDeaths = document.getElementById('totalDeaths')
const totalRecovered = document.getElementById('totalRecovered')


const ptr = document.getElementById('country');

const searchbox = document.querySelector('#country-name');
searchbox.addEventListener('keypress',setQuery);

function setQuery(key){
    if(key.keyCode == 13)
    {
        getResults(searchbox.value);
    }
}

function getResults(name){

    fetch('https://api.covid19api.com/summary').
    then((res)=> res.json()).then((data)=>{
        var output = '';

        for(var i =0 ;i<= 186;i++)
        {
            if(name == data.Countries[i].Country)
            {
                newConfirmed.innerText = data.Countries[i].NewConfirmed
                newDeaths.innerHTML = data.Countries[i].NewDeaths
                newRecovered.innerHTML = data.Countries[i].NewRecovered
                totalConfirmed.innerText = data.Countries[i].TotalConfirmed
                totalDeaths.innerHTML = data.Countries[i].TotalDeaths
                totalRecovered.innerHTML = data.Countries[i].TotalRecovered
                // output += '<ul>'+
                // '<li><b>Country : '+data.Countries[i].Country+ '</li></b><br>'+
                // '<li>New Confirmed : '+data.Countries[i].NewConfirmed+'</li>'+
                // '<li>New Deaths : '+data.Countries[i].NewDeaths+'</li>'+
                // '<li>New Recovered : '+data.Countries[i].NewRecovered+'</li>'+
                // '<li>Total Confirmed : '+data.Countries[i].TotalConfirmed+'</li>'+
                // '<li>Total Deaths : '+data.Countries[i].TotalDeaths+'</li>'+
                // '<li>Total Recovered : '+data.Countries[i].TotalRecovered+'</li><br><br>' ;

                // ptr.innerHTML = output;
            }
        }
    });
}
