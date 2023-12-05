const Device = (props) => {

  function showMenu() {
    props.showMenu(); 
  }

  return (
    <div
      style={{
        position: "absolute",
        left: `${props.left}px`,
        top: `${props.top}px`,
        border: "1px solid #000",
        padding: "8px",
        cursor: "move",
      }}
      onClick={showMenu}
    >
      {props.id}
    </div>
  );
};

export default Device;
