import { Component } from "react";
import AjaxApi from "./Components/AjaxApi";
import AjaxHooks from "./Components/AjaxHooks";
import CicloDeVida from "./Components/CicloDeVida";
import OffOnConHooks from "./Components/ContadorHooks";
//import ContadorHooks from "./Components/ContadorHooks";
import Eventos from "./Components/Eventos";
import OffOn from "./Components/OffOn";
import RelojHooks from "./Components/RelojHooks";
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
        <br/>
        <hr/>
        <p>Hooks</p>
        {/* <ContadorHooks/> */}
        <br/>
        <OffOnConHooks/>
        <br/>
        <hr/>
        <RelojHooks/>
        <br/>
        <hr/>
        <AjaxHooks/>
        <br/>
      </div>
    );
  }
}

export default App;
