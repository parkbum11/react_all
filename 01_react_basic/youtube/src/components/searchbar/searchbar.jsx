import React, { PureComponent } from 'react';
import styles from './searchbar.module.css';

class Searchbar extends PureComponent {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSearchVideo = (event) => {
    event.preventDefault();
    const videoName = this.inputRef.current.value;
    // console.log(videoName);
    if (videoName !== '') {
      videoName && this.props.onSearchVideo(videoName);
      this.formRef.current.reset();
    }
  }

  render() {
    return (
      <header className={styles.header}>

        <div className={styles.logo}>
          <img className={styles.img} src="/images/logo.png" alt=""/>
          <h1 className={styles.title}>Youtube</h1>
        </div>

        <form ref={this.formRef} onSubmit={this.onSearchVideo}>
          <input className={styles.input} ref={this.inputRef} type="text" placeholder="Search..." />
          <button className={styles.button}>
            <img className={styles.buttonImg} src="/images/search.png" alt=""/>
          </button>
        </form>

      </header>
    );
  }
}

export default Searchbar;