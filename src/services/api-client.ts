import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '43912709390549d0b7477a2f39173d72'
    }
})