export type MainWeather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
};
  
export type Weather = {
    main: MainWeather;
    name: string;
    weather: [
      {
        id: string;
        main: string;
        description: string;
        icon: string;
      }
    ];
  };
  


export type WeatherForecast = {
    main: MainWeather;
    dt: number;
  };