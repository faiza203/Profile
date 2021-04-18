import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Skills from "./components/Skills"
import Teams from "./components/Teams"
import Contacts from "./components/Contacts"

const date = new Date()

function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <About />
    <Services />
    <Skills />
    <Teams />
    <Contacts />
    <footer>
        <span><span class="far fa-copyright"></span> { date.getFullYear()} All rights reserved.</span>
    </footer>
        </div>
  );
}

export default App;
