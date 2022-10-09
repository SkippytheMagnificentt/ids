import React from 'react';
import ActionNav from './components/ActionNav';
import Resources from './components/Resources';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='AppContainer'>
        <div className='ResourcesContainer'>
            <Resources
            />
        </div>
        <div className='AppMainContainer'>
          <div className='AppActionNav'>
            <ActionNav
            />
          </div>
          <div className='AppActions'>

          </div>
          <div className='AppMessages'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
