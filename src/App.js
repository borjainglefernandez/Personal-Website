import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ExperiencePage from './components/ExperiencePage';
import AboutMePage from './components/AboutMePage';
import EducationPage from './components/EducationPage';
import ContactPage from './components/ContactPage';
import HomePage from './components/Home Page Components/HomePage';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <AboutMePage />} />
          <Route path="/education" exact component={() => <EducationPage />} />
          <Route path="/experience" exact component={() => <ExperiencePage />} />
          <Route path="/contact" exact component={() => <ContactPage />} />
        </Switch>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
