import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect
} from "react-router-dom";
import Game from './Components/Game'
import Addplayer from './Components/Addplayer'



export default function App() {

  const history = useHistory();

  const routeChange = () =>{ 
    let path = `/Components/Game`; 
    history.push(path);
  }


  return (
    <>
      <Game />
    </>
  );
}
