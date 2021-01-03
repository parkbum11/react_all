import React, { Component } from 'react';
import Videoitem from '../videoitem/videoitem';
import styles from './videolist.module.css';

// className={styles.}

class Videolist extends Component {
  videoDetail = (video) => {
    this.props.onVideoDetail(video);
  }

  render() {
    return (
      <ul className={styles.videos}>
        {this.props.videos.map(video => (
          <Videoitem 
            key={video.id} 
            video_snippet={video.snippet} 
            video={video}
            onVideoDetail={ this.videoDetail }
            display={ this.props.display }
          />
        ))}
      </ul>
    );
  }
}

export default Videolist;


