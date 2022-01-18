import axios from "axios";

export default axios.create({
  baseURL: "https://gotapi.gotly.me/",
  headers: {
    "Content-type": "application/json",
  },
});
