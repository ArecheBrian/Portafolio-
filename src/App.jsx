import { BrowserRouter } from "react-router-dom"
import { About, Contact, Education, Hero, Navbar, Portfolio, Tech} from "./components"

function App() {
  return (

    <BrowserRouter>
    <div className='relative z-0'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Tech/>
      <Portfolio/>
      <Contact/>
    </div>
    </BrowserRouter>
  )
}

export default App
