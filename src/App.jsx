
import './App.css'
import Nav from "./components/Nav"
import About from "./components/About"
import Skills from "./components/Skills"
import Work from "./components/Work"
import Contact from "./components/Contact"
import Home from './components/Home'


function App() {
  

  return (
    <div name='App' className='bg-sky-800 '>

        <Nav />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
              
        
        
    </div>

   
  )
}

export default App
