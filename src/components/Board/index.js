import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
const Board = () => {
  const canvasRef = useRef(null);
  // state.menu.activeMenuItem gives me either eraser or brush
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  //based on the top code we set the bottom one
  // state.toolbox[activeMenuItem] gives me color and size of either the brush or eraser
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    // put canvas height and width as window
    // height and width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width);
  }, []);

  console.log(color, size, 121);
  //console.log(canvasRef.current)
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
