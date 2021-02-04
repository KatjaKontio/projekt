import React from 'react';
import './shared/css/Global.css'
import { Routes } from './routes/Routes';
import { Desktopnavigation } from './components/navigation/desktopnavigation/Desktopnavigation'
import { Timer } from './pages/timerpage/timer/Timer'
import { UserProvider } from './shared/provider/UserProvider';
import { Signincomponent} from './pages/signinpage/signin/Signincomponent'
import { Navigation} from './components/navigation/Navigation'

function App() {
  return (
    <UserProvider>
      <Routes>
        <Navigation/>
      </Routes>
    </UserProvider>


  );
}

export default App;
