import ReactDOM from "react-dom";
import "./Modal.scss"
import { useEffect, useState } from "react";

const Backdrop = (props) => {
  function hideMenu() {
    props.closeMenu();
  }

  return <div className="backdrop" onClick={hideMenu}></div>;
};

const ModalOverlay = (props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  })


  return (
    <div className={`overlay slide-in ${isLoaded ? 'loaded' : ''}`}>
      <div>{props.children}</div>
    </div>
  );
};

const Modal = (props) => {
  function hideMenu() {
    props.closeMenu();
  }

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop closeMenu={hideMenu} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
