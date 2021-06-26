import axios from 'axios'

const request = axios.create({
  baseURL: 'https://youtube.googleapis.com/youtube/v3',
  params: {
    key: 'AIzaSyBAtAgp_3XaBYw9kyzd1mUMWTCSnGk75ZA',
  },
})

export default request
