import { createPortal } from 'react-dom';
import "./Menu.scss";
import Modal from '../UI/Modal';

const Menu = (props) => {
   
   function hideMenu() {
      props.closeMenu()
   }

   return (   
      <Modal closeMenu={hideMenu}>
         <div className='menu'>
            This is a menu
         </div>
      </Modal>
   );
}

export default Menu;