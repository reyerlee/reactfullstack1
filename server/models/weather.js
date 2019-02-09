const request = require('request-promise');

//const API_KEY = 'f462301a04d53e904dcf94963d17a4a3';
const API_KEY = '2aeee746f3f8314ae72a884d9d952568';

//require('dotenv').config();

class Weather {
  static retrieveByCity(city, callback) {
    request({
      //     uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&//APPID=${
      //       process.env.WEATHER_API_KEY
      //    }&units=imperial`,
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
      json: true,
      disable_ssl_verification: true
    })
      .then(res => {
        callback(res);
      })
      .catch(err => {
        console.log(err);
        callback({ error: `Could not reach OpenWeatherMap API.` });
      });
  }
}

module.exports = Weather;
