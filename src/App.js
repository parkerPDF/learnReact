import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      stat: [0, 0, 0],
      name: 'Enter Name',
      nameLocked: false,
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
      <div className='statDisp'>
        <SubButton onClick={() => this.subStat(s)}/>
        <DisplayVal value={this.state.stat[s]}/>
        <AddButton onClick={() => this.addStat(s)}/>
      </div>
      
    );
  }

  render() {
    return (
      <div className="App">
        <div className='StatBlock'>
          {this.renderStatDisp(0)}
          {this.renderStatDisp(1)}
          {this.renderStatDisp(2)}
        </div>
        <div>
          <GenericInput 
            value={this.state.name} 
            onChange={(name) => {
              this.setState({name})
            }}
            disabled={this.state.nameLocked}
          />
          <button onClick={() => {
            this.setState({nameLocked: !this.state.nameLocked})
          }}>Lock Name</button>
        </div>
        <div>More stuff in this Div</div>
      </div>
    );
  }
}

/**
 *           
<GenericInput value={this.state.name} onChange={(name) => {
  this.setState({name})
}}/>
 */
class GenericInput extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    const {type='text', value, onChange, ...restOfProps} = this.props
    return(
      <div>
        <input 
          type={type} 
          value={value} 
          onChange={(e) => {onChange(e.target.value);}} 
          {...restOfProps}
        />
      </div>
    );
  }
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
    <div>
      <h1>{((props.value-10) < 1 ? ((props.value-10)/2).toFixed() : ((props.value-11)/2).toFixed())}</h1>
      <h3>{props.value}</h3>
    </div>
  )
}

export default App;
