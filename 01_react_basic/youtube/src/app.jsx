import React, { Component } from 'react';
import styles from './app.module.css';
// import Youtube from './service/youtube';

import Videolist from './components/videolist/videolist';
import Searchbar from './components/searchbar/searchbar';
import VideoDetail from './components/videoDetail/videoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  componentDidMount() {
    this.props.youtube.mostPopular()
    .then((res) => {
      // console.log(res);
      const videos = res.data.items
      // console.log(videos);
      this.setState({ videos })
    }).catch((err) => {
      console.log(err);
    })
  }

  searchVideo = (query) => {
    this.props.youtube.search(query)
    .then((res) => {
      // console.log(res);
      const videos = res.data.items.map(item => ({...item, id: item.id.videoId}))
      // console.log(videos);
      this.setState({ videos })
      this.setState({ selectedVideo : null })
    }).catch((err) => {
      console.log(err);
    })
  }

  videoDetail = (video) => {
    this.setState({ selectedVideo : video })
  }

  render() {
    // 왜 두 번 출력이 되는거지?
    // console.log(this.state.videos); 
    return (
      <div className={styles.app}>
        <Searchbar onSearchVideo={ this.searchVideo }/>
        <section className={styles.content}>
          {this.state.selectedVideo && 
            <div className={styles.detail}>
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
          }
          <div className={styles.list}>
            <Videolist 
              videos={ this.state.videos }
              onVideoDetail={ this.videoDetail } 
              display={ this.state.selectedVideo? 'list' : 'grid'}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default App;

