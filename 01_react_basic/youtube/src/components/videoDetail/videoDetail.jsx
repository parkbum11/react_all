import React, { Component } from 'react';
import styles from './videoDetail.module.css';

class VideoDetail extends Component {
  render() {
    // console.log(this.props.selectedVideo);
    return (
      <section className={styles.detail}>
        <iframe 
          className={styles.video}
          title="youtube video player"
          type="text/html" 
          width="100%" 
          height="500px"
          src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
          frameBorder="0" 
          allowFullScreen>
        </iframe>
        <h2>{this.props.selectedVideo.snippet.title}</h2>
        <h3>{this.props.selectedVideo.snippet.channelTitle}</h3>
        <pre className={styles.description}>{this.props.selectedVideo.snippet.description}</pre>
      </section>
    );
  }
}

export default VideoDetail;