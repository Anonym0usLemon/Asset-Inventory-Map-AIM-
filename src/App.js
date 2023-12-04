import DraggableItem from "./DraggableItem";
import DroppableArea from "./DroppableArea";
import "./css/main.scss"; 

function App() {
  return (
    <div className="App">
      <div className="items">
        <span className="text-padding">Items</span>
        <DraggableItem id="item1" text="item1"/>
        <DraggableItem id="item2" text="item2"/>
      </div>

      <DroppableArea>
        {/* this area is droppable */}
      </DroppableArea>
    </div>
  );
}

export default App;
