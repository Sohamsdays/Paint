import { useSelector, useDispatch } from "react-redux";
import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "@/constants";
import { changeColor, changeBrushSize } from "@/slice/toolboxSlice";
const Toolbox = () => {
  const dispatch = useDispatch();
  //useSelector is for JS
  //useAppSelector is for TS

  //menu = reducer name in store
  // useSelector is basically pulling values out of the redux store
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  // const activeColor  = useSelector((state)=> state.toolBox.)

  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  //trickey one
  // first select which item brush or eraser
  // then change the size
  const updateBrushSize = (e) => {
    dispatch(changeBrushSize({ item: activeMenuItem, size: e.target.value }));
  };

  const updateColor = (newColor) => {
    dispatch(changeColor({ item: activeMenuItem, color: newColor }));
  };
  console.log(useSelector((state) => state.toolBox));
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
                onClick={() => updateColor(COLORS.BLACK)}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.RED }}
                onClick={() => updateColor(COLORS.RED)}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.GREEN }}
                onClick={() => updateColor(COLORS.GREEN)}
              />
              <div
                className={styles.colorBox}
                style={{ background: COLORS.YELLOW }}
                onClick={() => updateColor(COLORS.YELLOW)}
              />
            </div>
          </div>
        )}

        <></>
        {showBrushToolOption && (
          <div className={styles.toolItem}>
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
          </div>
        )}
      </div>
    </>
  );
};

export default Toolbox;
