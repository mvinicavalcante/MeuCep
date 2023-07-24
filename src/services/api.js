import axios from "axios";

//modelo que deve chegar http://viacep.com.br/ws/01001000/json/'

const Api = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export default Api;
