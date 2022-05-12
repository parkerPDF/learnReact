import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat: [0],
    };
  }

  addStat(statNum){
    let stats = [...this.state.stat];
    stats[statNum] += 1
    this.setState({
      stat: stats
    });

  }

  subStat(statNum){
    let stats = [...this.state.stat];
    stats[statNum] -= 1
    this.setState({
      stat: stats
    });

  }

  render() {
    return (
      <div className="App">
        <StatValue 
          whatStat={0}
          value={this.state} 
          addClick={(s) => this.addStat(s)}
          subClick={(s) => this.subStat(s)}
        />
      </div>
    );
  }

}

function StatValue(props) {
  return(
    <div>
      <AddButton onClick={() => props.addClick(props.whatStat)}/>
      <DisplayVal value={props.value.stat[props.whatStat]}/>
      <SubButton onClick={() => props.subClick(props.whatStat)}/>
    </div>
  );
}

function AddButton(props) {
  return (
    <button 
      className='addButton'
      onClick={props.onClick}
    >+</button>
  );
}
function SubButton(props) {
  return (
    <button 
      className='subButton'
      onClick={props.onClick}
    >-</button>
  );
}
function DisplayVal(props) {
  return(
    <h1>{props.value}</h1>
  )
}

export default App;
