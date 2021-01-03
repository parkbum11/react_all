import React, { Component } from 'react';

class SimpleHabit extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button
          className="habit-button habit-increase"
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
      </li>
    );
  }
}

export default SimpleHabit;


//////react 훅
// import React, { useState, useRef, useCallback, useEffect } from 'react';

// const SimpleHabit = () => {
//   const [count, setCount] = useState(0);
//   const spanRef = useRef();

//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   });

//   useEffect(() => {
//     console.log(`mounted & updated!: ${count}`);
//   }, []);
//   return (
//     <li className="habit">
//       <span ref={spanRef} className="habit-name">
//         Reading
//       </span>
//       <span className="habit-count">{count}</span>
//       <button className="habit-button habit-increase" onClick={handleIncrement}>
//         <i className="fas fa-plus-square"></i>
//       </button>
//     </li>
//   );
// };

// export default SimpleHabit;
