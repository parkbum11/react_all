import React, { memo } from 'react';

const Inputbar = memo((props) => {
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    formRef.current.reset();
  };

  return (
    <form ref={formRef} className="add-form" onSubmit={onSubmit}>
      <input 
        ref={inputRef} 
        type="text" 
        className="add-input"
      />
      <button className="add-button">add</button>
    </form>
  );
});

export default Inputbar;







// import React, { PureComponent } from 'react';

// class Inputbar extends PureComponent {
//   formRef = React.createRef();
//   inputRef = React.createRef();

//   onSubmit = (event) => {
//     // console.log(event);
//     event.preventDefault();
//     // console.log(this.inputRef.current.value);
//     const name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     // this.inputRef.current.value = '';
//     this.formRef.current.reset();
//   }

//   render() {
//     return (
//       <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
//         <input ref={this.inputRef} type="text" className="add-input"/>
//         <button className="add-button">add</button>
//       </form>
//     );
//   }
// }

// export default Inputbar;