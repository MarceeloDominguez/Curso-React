import { Component } from "react";
import AjaxApi from "./Components/AjaxApi";
import CicloDeVida from "./Components/CicloDeVida";
import Eventos from "./Components/Eventos";
import OffOn from "./Components/OffOn";
import RenderCondicional from "./Components/RenderCondicional";

class App extends Component {
  render(){
    return (
      <div>
        <RenderCondicional/>
        <br/>
        <hr/>
        <Eventos/>
        <OffOn/>
        <br/>
        <hr/>
        <CicloDeVida/>
        <br/>
        <hr/>
        <AjaxApi/>
      </div>
    );
  }
}

export default App;
