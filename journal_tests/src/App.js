import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <JournalEntry/>
  );
}

class JournalEntry extends React.Component {
  constructor(props) {
    const {...restOfProps} = this.props;
    super(restOfProps);
  }  
}

export default App;
