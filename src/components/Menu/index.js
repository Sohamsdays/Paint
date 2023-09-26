import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./index.module.css";
const Menu = () => {
  return (
    <>
      <div className={styles.menuContainer}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faPencil} className={styles.icon} />
        </div>
        <div className={styles.iconWrapper}>
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
