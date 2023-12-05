import { useState } from "react";
import DroppableArea from "./components/dragndrop/DroppableArea";
import Items from "./components/dragndrop/Items";
import Menu from "./components/menu/Menu";
import "./css/main.scss"; 

function App() {
  const [toggleMenu, setToggleMenu] = useState(true); 

  function showMenu() {
    setToggleMenu(true);
  }

  function hideMenu() {
    setToggleMenu(false); 
  }

  return (
    <div className="App">
      <Items/>
      {toggleMenu && <Menu closeMenu={hideMenu}/>}
      <DroppableArea openMenu={showMenu}>
        {/* this area is droppable */}
      </DroppableArea>
    </div>
  );
}

export default App;
