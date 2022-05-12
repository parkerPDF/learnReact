import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat1: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <StatValue value={this.state}/>
      </div>
    );
  }

}

function StatValue(props) {
  return(
    <div>
      <AddButton/>
      <DisplayVal value={props.value.stat1}/>
      <SubButton/>
    </div>
  );
}

function AddButton(props) {
  return (
    <button className='addButton'>+</button>
  );
}
function SubButton(props) {
  return (
    <button className='subButton'>-</button>
  );
}
function DisplayVal(props) {
  return(
    <h1>{props.value}</h1>
  )
}

export default App;
