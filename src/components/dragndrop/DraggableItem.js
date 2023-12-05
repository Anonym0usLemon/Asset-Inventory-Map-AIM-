// src/DraggableItem.js
import React from 'react';

const DraggableItem = ({ id, text }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{ border: '1px solid #000', padding: '8px', cursor: 'move' }}
    >
      {text}
    </div>
  );
};

export default DraggableItem;
