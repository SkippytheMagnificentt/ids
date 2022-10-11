import React, { useState } from 'react';
import ActionNav from './components/ActionNav';
import Resources from './components/Resources';
import './App.css';
import Actions from './components/Actions';


function App() {

  const [actionState, setActionState] = useState('mine');

  const changeActionState = function(actionStateParam) {
    setActionState(actionStateParam)
    console.log(actionState)
  }

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
              changeActionState={changeActionState}
            />
          </div>
          <div className='AppActions'>
            <Actions
              actionState
            />
          </div>
          <div className='AppMessages'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
