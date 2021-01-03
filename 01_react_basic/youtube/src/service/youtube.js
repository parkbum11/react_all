import axios from 'axios';

class Youtube {
  constructor(key) {
    // this.youtube = axios.create({
    //   baseURL: 'https://youtube.googleapis.com/youtube/v3',
    //   params: { key : key }
    // })
    this.key = key
  }
  
  mostPopular() {
    const mostPopularYoutube = 'https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=';
    return (
      axios({
        url: `${mostPopularYoutube}${this.key}`,
        method: 'get',
      })
    )
    // const response = this.youtube.get('videos', {
    //   params: {
    //     part: 'snippet',
    //     chart: 'mostPopular',
    //     maxResults: 25,
    //   }
    // });
    // return response.data.items;
  }
  search(query) {
    const searchVideoUrl = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=';
    return (
      axios({
        url: `${searchVideoUrl}${query}&key=${this.key}`,
        method: 'get',
      })
    )
  }
}

export default Youtube;