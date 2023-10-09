import { useEffect, useRef,useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Board = () => {
  const canvasRef = useRef(null);
  const shouldDraw = useRef(false);
  // state.menu.activeMenuItem gives me either eraser or brush
  const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
  //based on the top code we set the bottom one
  // state.toolbox[activeMenuItem] gives me color and size of either the brush or eraser
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    context.strokeStyle = color;
    context.lineWidth = size;
  }, [color, size]);

  //before browser paint, before component mount
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    // put canvas height and width as window
    // height and width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log(canvas.width);

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      context.beginPath(); // Start a new path
      context.moveTo(e.clientX, e.clientY);
    };
    const handleMouseUp = (e) => {
      
      shouldDraw.current = false;
    };
    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      context.lineTo(e.clientX, e.clientY);
      context.stroke();
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log(color, size, 121);
  //console.log(canvasRef.current)
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
