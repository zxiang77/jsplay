import React from 'react';
import logo from './k8s.png';
import './App.css';
import { BrowserRouter /* how this behave */, Route } from 'react-router-dom';
import MainConfig from './components/MainConfig';

class App extends React.Component {
    render() {
        return (
            <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Create a Kubernetes config file from here!
                </p>
                <MainConfig />
              </header>
              
            </div>
          );
    }
}

export default App;
