import axios from "axios";

const API_KEY = "718eb1618a654e149df155611223108";
// const BASE_URL = "http://api.weatherapi.com/v1";

export default class weatherApi {
  constructor() {
    this.client = axios.create({
      params: {
        key: API_KEY,
      },
    });
  }

  async getWetherToday(city) {
    try {
      const getWeather = await this.client.get(
        "https://api.weatherapi.com/v1/current.json",
        {
          params: {
            q: city,
          },
        }
      );
      return getWeather.data;
    } catch (error) {
      throw error;
    }
  }

  async getForecastThreeDays(city) {
    try {
      const forecast = await this.client.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            q: city,
            days: 3,
          },
        }
      );
      return forecast.data;
    } catch (error) {
      throw error;
    }
  }

  async getFutureWeather(city) {
    try {
      const forecast = await this.client.get(
        "https://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            q: city,
            days: 14,
          },
        }
      );
      return forecast.data;
    } catch (error) {
      throw error;
    }
  }

  // async getCities(value) {
  //   try {
  //     const cities = await this.client.get(
  //       "http://api.weatherapi.com/v1/search.json",
  //       {
  //         params: {
  //           q: value,
  //         },
  //       }
  //     );
  //     return cities.data;
  //   } catch (error) {
  //     throw error;
  //   }
  // }
}
