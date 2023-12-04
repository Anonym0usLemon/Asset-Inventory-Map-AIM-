// src/DroppableArea.js
import React, { useState } from 'react';

const DroppableArea = () => {
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const itemId = e.dataTransfer.getData('text/plain');
    const offsetX = e.clientX - e.target.getBoundingClientRect().left;
    const offsetY = e.clientY - e.target.getBoundingClientRect().top;

    setDraggedItem({ id: itemId, left: offsetX, top: offsetY });
  };

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
      {draggedItem && (
        <div
          style={{
            position: 'absolute',
            left: `${draggedItem.left}px`,
            top: `${draggedItem.top}px`,
            border: '1px solid #000',
            padding: '8px',
            cursor: 'move',
          }}
        >
          {draggedItem.id}
        </div>
      )}
    </div>
  );
};

export default DroppableArea;
