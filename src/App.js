import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Header from './Components/Header/Header'
import Search from './Components/Search/Search'



class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />

        <Search className='search'/>
        
      </div>
    );
  }
}

export default App;
