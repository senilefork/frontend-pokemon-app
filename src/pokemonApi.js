import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";


class PokemonApi {
  static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);
  
      const url = `${BASE_URL}/${endpoint}`;
      const params = (method === "get")
          ? data
          : {};
  
      try {
        return (await axios({ url, method, data, params })).data;
      } catch (err) {
        console.error("API Error:", err.message);
      }
    }

  static async getPokemonData(offset, limit){
    const res = await this.request(`pokemon/${offset}/${limit}`)
    return res.data
  }
}

export default PokemonApi;