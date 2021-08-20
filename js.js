let jsonFile = 'https://api.openweathermap.org/data/2.5/onecall?lat=57.6299&lon=39.8737&exclude=&appid=d7c4ee7f7bb0b4e8fb0ed29b662e11fc&lang=ru&units=metric';
$.getJSON(jsonFile, function (data) {

    // Текущая температура
    let dataTemp = data.current.temp;
    dataTemp = Math.round(dataTemp);
    $("#dataTemp").text(dataTemp);

    // +1 ч
    let dataTemp1 = data.hourly[0].temp;
    dataTemp1 = Math.round(dataTemp1);
    $("#dataTemp1").text(dataTemp1);
    dataTime1 = new Date(data.hourly[0].dt * 1000);
    $("#dataTime1").text(dataTime1.getHours() + ':00');

    // +2 ч
    let dataTemp2 = data.hourly[1].temp;
    dataTemp2 = Math.round(dataTemp2);
    $("#dataTemp2").text(dataTemp2);
    dataTime2 = new Date(data.hourly[1].dt * 1000);
    $("#dataTime2").text(dataTime2.getHours() + ':00');


    

});