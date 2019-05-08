const request = require('request')

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/c960487810c27b3c69c5edd473af0102/${latitude},${longitude}?units=si`


  request({url, json: true}, (error, {body}) => {
    if (error) {
      callback('Unable to connect to weather forecast.', undefined)
    } else if (body.error) {
      ccallback('Unable to find location', undefined)
    } else {
      const c = body.currently
      const s = `Theres currently ${c.temperature} degrees out. There is ${c.precipProbability}% chance of rain.`
      callback(undefined, s)
    }
  
  })
  
}

module.exports = forecast