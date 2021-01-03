import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    // console.log(this.props);
    const totalcount = this.props.totalCount
    return (
      <nav>
        <span>Habit Tracker</span>
        <span className="habit-count">{ totalcount }</span><br/>
      </nav>
    );
  }
}

export default Navbar;