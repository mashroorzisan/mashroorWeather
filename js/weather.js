const cityName = city => {
    const key = 'ed18233e9531aa1fb631f8c133788b50';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}
const displayData = logs => {
    console.log(logs);
    const citySection = document.getElementById('citysection');
    citySection.textContent = '';
    const cityDiv = document.createElement('div');
    let proxy = '';
    if (logs.main.temp >= 30) {
        proxy = `
    <h1 class= 'font-bold text-white text-5xl'>${logs.name}</h1>
    <p class ='font-semibold text-white text-2xl mt-10'>Today's temperature at dhaka is <i class="fa-solid fa-sun text-3xl"></i></p>
    <h1 class = 'font bold text-white text-4xl'>${logs.main.temp}°C</h1>
    `;
    }
    else if (logs.main.temp >= 20 && logs.main.temp < 30) {
        proxy = `
        <h1 class= 'font-bold  text-5xl'>${logs.name}</h1>
        <p class ='font-semibold  text-2xl mt-10'>Today's temperature at dhaka is <i class="fa-solid fa-cloud-sun text-3xl"></i></p>
        <h1 class = 'font bold  text-4xl'>${logs.main.temp}°C</h1>
        `;
    }
    else {
        proxy = `
        <h1 class= 'font-bold  text-5xl'>${logs.name}</h1>
        <p class ='font-semibold  text-2xl mt-10'>Today's temperature at dhaka is 
        <i class="fa-solid fa-snowflake text-3xl"></i></p>
        <h1 class = 'font bold  text-4xl'>${logs.main.temp}°C</h1>
        `;

    }

    cityDiv.innerHTML = proxy;
    citySection.appendChild(cityDiv)

}


document.getElementById('src-btn').addEventListener('click', function () {
    // console.log('hello')
    const inputField = document.getElementById('src-value');
    cityName(inputField.value);
})

