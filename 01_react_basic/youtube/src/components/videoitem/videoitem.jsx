import React, { PureComponent } from 'react';
import styles from './videoitem.module.css';

class Videoitem extends PureComponent {
  videoDetail = () => {
    this.props.onVideoDetail(this.props.video);
  }

  render() {
    const displayType = this.props.display === 'list' ? styles.list : styles.grid;

    return (
      <li className={`${styles.container} ${displayType}`} onClick={this.videoDetail}>
        <div className={styles.video}>
          <img 
            className={styles.thumbnail} 
            src={this.props.video_snippet.thumbnails.medium.url} 
            alt="youtube video"
          />
          <div className={styles.metadata}>
            <p className={styles.title}>{this.props.video_snippet.title}</p>
            <p className={styles.channel}>{this.props.video_snippet.channelTitle}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Videoitem;