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
                output += '<ul>'+
                '<li><b>Country : '+data.Countries[i].Country+ '</li></b><br>'+
                '<li>New Confirmed : '+data.Countries[i].NewConfirmed+'</li>'+
                '<li>New Deaths : '+data.Countries[i].NewDeaths+'</li>'+
                '<li>New Recovered : '+data.Countries[i].NewRecovered+'</li>'+
                '<li>Total Confirmed : '+data.Countries[i].TotalConfirmed+'</li>'+
                '<li>Total Deaths : '+data.Countries[i].TotalDeaths+'</li>'+
                '<li>Total Recovered : '+data.Countries[i].TotalRecovered+'</li><br><br>' ;

                ptr.innerHTML = output;
            }
        }
    });
}