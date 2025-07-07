import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: "AIzaSyBrIu3zYBXZb4gJMdPmywCS-hFA1ESy590",
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
