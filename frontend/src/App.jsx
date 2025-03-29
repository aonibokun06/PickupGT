
import './App.css'
import {Route, Routes} from "react-router-dom"
import {Home} from  "./pages/Home"
import {Browse} from "./pages/Browse"
import {Schedule} from "./pages/Schedule"

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Home />} />
      <Route path = "/Browse" element={<Browse />} />
      <Route path = "/Schedule" element={<Schedule />} />
    </Routes>
  )
}

export default App
