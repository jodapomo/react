import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://fir-upload-ee84a.firebaseio.com/',
});

export default instance;