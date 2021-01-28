import React from 'react';
import './shared/css/Global.css'
import { Routes } from './routes/Routes';
import { Desktopnavigation } from './components/navigation/desktopnavigation/Desktopnavigation'
import { Timer } from './components/timer/Timer'
import { UserProvider } from './shared/provider/UserProvider';
import { Signincomponent} from './components/signin/Signincomponent'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Desktopnavigation />
      </Routes>
    </UserProvider>


  );
}

export default App;
