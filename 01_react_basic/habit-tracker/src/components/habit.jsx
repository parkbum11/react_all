import React, { PureComponent } from 'react';

class Habit extends PureComponent {
  componentDidMount() {
    // when compo create
  }

  componentWillUnmount() {
    // when compo delete
  }

  handleIncrement = () => {
    this.props.oonIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.oonDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.oonDelete(this.props.habit);
  };

  render() {
    // console.log(this.props.habit);
    const { name, count } = this.props.habit
    return (
      <li className="habit">
        <span className="habit-name">{ name }</span>
        <span className="habit-count">{ count }</span>
        <button 
          onClick={this.handleIncrement} 
          className="habit-button habit-increase">
          <i className="fas fa-plus-square"></i>
        </button>
        <button 
          onClick={this.handleDecrement} 
          className="habit-button habit-decrease">
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          onClick={this.handleDelete} 
          className="habit-button habit-delete">
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;