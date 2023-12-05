import DraggableItem from "./DraggableItem";
import "./Items.scss";

const Items = () => {
  return (
    <div className="draggable-items">
      <span className="text-padding">Items</span>
      <DraggableItem id="item1" text="item1" />
      <DraggableItem id="item2" text="item2" />
    </div>
  );
};

export default Items;
