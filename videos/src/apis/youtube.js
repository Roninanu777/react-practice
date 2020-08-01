import axios from 'axios';
const KEY ='AIzaSyCsTsaLc3NCrWikKoKhEZICc1r4NdpwqcU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
})