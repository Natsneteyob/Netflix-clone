import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3", // just the basic that use but from that it differentiate
});

instance.get("/movie/top_rated"); //like fetch and axios works like that https://api.themoviedb.org/3/movie/top_rated(added)

export default instance;
