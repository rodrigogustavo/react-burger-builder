import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-builder-burger.firebaseio.com/'
})

export default instance;