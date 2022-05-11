import https from 'https';
import chalk from 'chalk';
const getWeather = async (city) => {
  const geo = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=676b553a31c2d38cf3b99130806d5c05`;
  https.get(geo, (response) => {
    let result = '';
    response.on('data', (chunk) => {
      result += chunk;
    });
    response.on('end', () => {
      const { lat, lon } = JSON.parse(result)[0];
      console.log(`${city} lat and lon - ${lat}, ${lon}`);
      https.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=676b553a31c2d38cf3b99130806d5c05&units=metric`,
        (response) => {
          let result = '';
          response.on('data', (chunk) => {
            result += chunk;
          });
          response.on('end', () => {
            console.log(`${chalk.magentaBright(' WEATHER ')}
            ${JSON.parse(result).weather[0].description} 
            Температура: ${JSON.parse(result).main.temp}  (відчувається як: ${
              JSON.parse(result).main.feels_like
            })
            Вологість повітря: ${JSON.parse(result).main.humidity}
            Швидкість повітра: ${JSON.parse(result).wind.speed}
            `);
          });
        }
      );
    });
  });
};

export { getWeather };
