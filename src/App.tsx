import React, { useState } from 'react';
import ActionNav from './components/ActionNav';
import Resources from './components/Resources';
import './App.css';
import Actions from './components/Actions';
import Messages from './components/Messages';


function App() {
  
  
  const [actionState, setActionState] = useState('mine');
  const changeActionState = function(actionStateParam) {
    setActionState(actionStateParam)
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
              actionState={actionState}
              changeActionState={changeActionState}
            />
          </div>
          <div className='AppActions'>
            <Actions
              actionState={actionState}
            />
          </div>
          <div className='AppMessages'>
            <Messages />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
