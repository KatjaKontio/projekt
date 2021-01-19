import React from 'react';
import {Greeting} from './components/greeting/Greeting';
import {Header} from './components/header/Header';
import {Routes} from './routes/Routes';
import {Desktopnavigation} from './components/navigation/desktopnavigation/Desktopnavigation'

function App() {
  return (
<Routes>
  <Desktopnavigation/>
</Routes>



  );
}

export default App;
