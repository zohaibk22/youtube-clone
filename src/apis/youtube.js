import axios from 'axios';

const KEY = 'AIzaSyA38mrgrcWQ4ggyufBU2mU22Ulxusw14T8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  // these params are preconfiguations
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY,
    type: 'video',
  },
});
