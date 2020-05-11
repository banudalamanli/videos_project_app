import axios from 'axios';

const KEY = 'AIzaSyCGk2djYHJWapHhlMxyl8U4J4hdH_rH4RU';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: `${KEY}`,
  },
});
