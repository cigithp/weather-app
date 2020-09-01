const forecast = require('./utils/forecast')
const log = console.log
const location = process.argv[2]
//object destructuring
forecast(location, (error, {location, weather_description : description, curr_temp : current, feels_like_temp : feels}) => {
    if(error) {
        return log(error)
    }
    log(location)
    log(description+'. It is currently '+current+' degrees out. It feels like '+ feels+ ' degrees out.')
})