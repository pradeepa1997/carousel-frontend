import axios from 'axios';
import { baseUrl } from '../config/endpoints/main.endpoint.js';

const apiRequest = (url = "", method = "GET", data = {}, params = {}, headers = {}, validateStatus = () => true) => axios({
    baseURL: baseUrl,
    method,
    url,
    params,
    headers,
    data,
    validateStatus
});


export { apiRequest }