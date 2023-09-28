import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { MENU_ITEMS } from "@/constants";
import styles from "./index.module.css";
import { useDispatch } from "react-redux";
import { menuItemClick, actionItemClick } from "@/slice/menuSlice";
const Menu = () => {
  const dispatch = useDispatch();

  function handleMenuClick(itemName) {
    //itemName will come in action not state
    dispatch(menuItemClick(itemName));
  }
  return (
    <>
      <div className={styles.menuContainer}>
        <div
          className={styles.iconWrapper}
          onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}
        >
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>
        <div
          className={styles.iconWrapper}
          onClick={() => handleMenuClick(MENU_ITEMS.ERASER)}
        >
          <FontAwesomeIcon icon={faEraser} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateLeft} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faRotateRight} />
        </div>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
    </>
  );
};
export default Menu;
