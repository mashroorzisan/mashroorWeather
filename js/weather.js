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
    cityDiv.innerHTML = `
    <h1 class= 'font-bold text-white text-5xl '>${logs.name}</h1>
    <p class ='font-semibold text-white text-2xl mt-10'>Today's temperature at dhaka is</p>
    <h1 class = 'font bold text-white text-4xl'>${logs.main.temp}°C</h1>
    `;
    citySection.appendChild(cityDiv)

}


document.getElementById('src-btn').addEventListener('click', function () {
    // console.log('hello')
    const inputField = document.getElementById('src-value');
    cityName(inputField.value);
})

