
import React, {Component} from 'react';
import Navbar from './components/Navbar.js';
import News from   './components/News.js';
import './App.css';

class App extends Component{
     render(){
      return(
        <div>
        <Navbar/>
        <News category="business" pageSize={5}/>
        </div>
      )
     }

    }

export default App;
