import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inicio from "./pages/Inicio";
import Laempresa from "./pages/Laempresa";
import Elamanecer from "./pages/Elamanecer";
import Elamanecerubicacion from "./pages/Elamanecerubicacion";
import Elamanecerlotes from "./pages/Elamanecerlotes";
import Elamanecercasas from "./pages/Elamanecercasas";
import Villatiana from "./pages/Villatiana";
import Villatianaubicacion from "./pages/Villatianaubicacion";
import Villatianacasas from "./pages/Villatianacasas";
import Duplex from "./pages/Duplex";
import Noticias from "./pages/Noticias";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Inicio} exact />
          <Route path="/Laempresa" component={Laempresa} />
          <Route path="/Duplex" component={Duplex} />
          <Route path="/Noticias" component={Noticias} />
          <Route path="/Elamanecer" component={Elamanecer} />
          <Route path="/Elamanecerubicacion" component={Elamanecerubicacion} />
          <Route path="/Elamanecerlotes" component={Elamanecerlotes} />
          <Route path="/Elamanecercasas" component={Elamanecercasas} />
          <Route path="/Villatiana" component={Villatiana} />
          <Route path="/Villatianaubicacion" component={Villatianaubicacion} />
          <Route path="/Villatianacasas" component={Villatianacasas} />
          <Route path="/Contacto" component={Contacto} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
