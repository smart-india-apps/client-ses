import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Content from './components/Content';
import Header from './components/Header';
import Fire from './components/Fire';
import Medical from './components/Medical';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Content} />
        <Route path="/fire" component={Fire}/>
        <Route path="/medical" component={Medical}/>
      </div>
    </Router>
  );
}

export default App;
