import { Component } from "react";
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
      </div>
    );
  }
}

export default App;
