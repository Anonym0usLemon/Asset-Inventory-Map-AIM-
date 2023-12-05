// src/DroppableArea.js
import React, { useState } from 'react';
import Device from './Device';

// Eventually these will be pulled from a database. 
const devices = [
  { id: 'Item1', left: 355, top: 213 },
  { id: 'Item2', left: 245, top: 213 },
  { id: 'Item3', left: 755, top: 213 },
  { id: 'Item4', left: 65, top: 213 },
  { id: 'Item5', left: 531, top: 213 },  
];

const DroppableArea = (props) => {
  const [draggedItems, setDraggedItems] = useState(devices);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;

    setDraggedItems((prevItems) => [
      ...prevItems,
      {id: itemId, left: offsetX, top: offsetY}
    ]);

    // TODO: store the updated item list in a database.  
  };

  function openMenu() {
    props.openMenu(); 
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        border: '2px dashed #000',
        position: 'relative',
        boxSizing: 'border-box'
      }}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {draggedItems && draggedItems.map((item) => (
        <Device key={Math.random()} id={item.id} left={item.left} top={item.top} showMenu={openMenu}/>
      ))}
    </div>
  );
};

export default DroppableArea;
