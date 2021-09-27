import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_HOST;
axios.defaults.headers.common['Content-Type'] = "application/json";

export default axios;