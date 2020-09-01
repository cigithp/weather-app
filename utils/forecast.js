const request = require('postman-request')
const encodeUrl = require('encodeurl')

const forecast = (location, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=c020501743bb6828ff05a14281e1280f&query="+ encodeUrl(location) + "&units=f"
    request(url, {json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to weather service', undefined)
        } else if(response && response.body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, {
                weather_description: response.body.current.weather_descriptions[0],
                curr_temp: response.body.current.temperature,
                feels_like_temp: response.body.current.feelslike,
                location: response.body.location.name + ',' + response.body.location.region + ',' + response.body.location.country
            })
        }
    })
}

module.exports = forecast