import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://hillz-class.herokuapp.com/'
})

export default instance;