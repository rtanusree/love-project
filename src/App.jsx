import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import Section1 from './section1'
import About from  './component/about'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function App() {
  return (
  <>
  
<Router>
    <Routes>
    <Route path="/"element={<Section1/>}>
     </Route>
     <Route path="/about"element={<About/>}>
     </Route>
    </Routes>
  </Router>
  </>
      )
}

export default App
