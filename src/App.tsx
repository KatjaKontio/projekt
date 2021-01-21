import React from 'react';
import './shared/css/Global.css'
import {Routes} from './routes/Routes';
import {Desktopnavigation} from './components/navigation/desktopnavigation/Desktopnavigation'
import {Timer} from './components/timer/Timer'

function App() {
  return (
<Routes>
  <Desktopnavigation/>
</Routes>



  );
}

export default App;
