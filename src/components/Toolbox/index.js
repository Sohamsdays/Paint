import { useSelector } from "react-redux";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
const Toolbox = () => {
  //useSelector is for JS
  //useAppSelector is for TS

  //menu = reducer name in store
  // useSelector is basically pulling values out of the redux store
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  const updateBrushSize = (e) => {};
  return (
    <>
      <div className={styles.toolBoxContainer}>
        {showStrokeToolOption && (
          <div className={styles.toolItem}>
            <h4 className={styles.tooltext}>Stroke Colors</h4>
            <div className={styles.itemContainer}>
              <div
                className={styles.colorBox}
                style={{ background: COLORS.BLACK }}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.RED }}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.GREEN }}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.YELLOW }}
              />
            </div>
          </div>
        )}

        <></>
        {showBrushToolOption && <div className={styles.toolItem}>
          <h4 className={styles.tooltext}>Brush Size {activeMenuItem}</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>}
        
      </div>
    </>
  );
};

export default Toolbox;
