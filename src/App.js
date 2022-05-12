import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat: [0, 0],
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

  renderStatDisp(s) {
    return (
      <StatValue 
        whatStat={s}
        value={this.state} 
        addClick={() => this.addStat(s)}
        subClick={() => this.subStat(s)}
      />
    );
  }

  render() {
    return (
      <div className="App">
        {this.renderStatDisp(0)}
        {this.renderStatDisp(1)}
      </div>
    );
  }

}

function StatValue(props) {
  return(
    <div>
      <AddButton onClick={props.addClick}/>
      <DisplayVal value={props.value.stat[props.whatStat]}/>
      <SubButton onClick={props.subClick}/>
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
