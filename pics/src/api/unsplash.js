import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID rWK0K6_RiRWHtmVS08WsWC1SAyNZtkEfRKbm6HV_ACQ'
    }
})