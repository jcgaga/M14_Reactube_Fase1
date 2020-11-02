import axios from 'axios';

const KEY = 'AIzaSyBlNUCSWchlsvX2X3_vrLPOdqBJ5uq-u0U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 5,
        key: KEY
    }
})