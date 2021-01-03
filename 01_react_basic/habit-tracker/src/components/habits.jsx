import React, { Component } from 'react';
import Habit from './habit'
import Inputbar from './inputbar'

class Habits extends Component {
  handleIncrement = (habit) => {
    // console.log(habit);
    this.props.onIncrement(habit);
  };

  handleDecrement = (habit) => {
    this.props.onDecrement(habit);
  };

  handleDelete = (habit) => {
    this.props.onDelete(habit);
  };

  handleAdd = (habitName) => {
    this.props.onAdd(habitName);
  }

  render() {
    return (
      <>
        <Inputbar 
          onAdd={this.handleAdd}/>
        <ul>
          {this.props.habits.map(habit => (
              <Habit 
                key={habit.id} 
                habit={ habit } 
                oonIncrement={this.handleIncrement}
                oonDecrement={this.handleDecrement}
                oonDelete={this.handleDelete}/>
          ))}
        </ul>
        <button onClick={this.props.onReset}>Reset All</button>
      </>
    );
  }
}

export default Habits;