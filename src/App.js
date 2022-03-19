import "./App.css";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";

import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import TC from "./pages/TC";
import Privacy from "./pages/Privacy";
import ContactUs from "./pages/ContactUs";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/tc" component={TC} />
          <Route path="/privacypolicy" component={Privacy} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
