import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Prizes } from "./components/Prizes";
import { Tracks } from "./components/Tracks";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Prizes />
      <Tracks />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
