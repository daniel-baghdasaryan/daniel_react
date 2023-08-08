import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Vahe from './components/Vahe'
import Nare from './components/Nare'
import Gohar from './components/Gohar'
import Meri from './components/Meri'
import Silva from './components/Silva'
import Arevik from './components/Arevik'
import Koryun from './components/Koryun'
import Gevorg from './components/Gevorg'
import Anjelika from './components/Anjelika'
import Ashot from './components/Ashot'
import Nurik from './components/Nurik'
import Gegham from './components/Gegham'
import Garegin from './components/Garegin'
import Derenik from './components/Derenik'
import Erik from './components/Erik'
import reportWebVitals from './reportWebVitals'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/vahe" element={<Vahe />} />
        <Route path="/nare" element={<Nare />} />
        <Route path="/gohar" element={<Gohar />} />
        <Route path="/meri" element={<Meri />} />
        <Route path="/silva" element={<Silva />} />
        <Route path="/arevik" element={<Arevik />} />
        <Route path="/koryun" element={<Koryun />} />
        <Route path="/gevorg" element={<Gevorg />} />
        <Route path="/anjelika" element={<Anjelika />} />
        <Route path="/ashot" element={<Ashot />} />
        <Route path="/nurik" element={<Nurik />} />
        <Route path="/gegham" element={<Gegham />} />
        <Route path="/garegin" element={<Garegin />} />
        <Route path="/derenik" element={<Derenik />} />
        <Route path="/erik" element={<Erik />} />
      </Routes>
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
