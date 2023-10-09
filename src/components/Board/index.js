import { MENU_ITEMS } from "@/constants";
import { useEffect, useRef, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionItemClick } from "@/slice/menuSlice";
const Board = () => {
  const dispatch = useDispatch();
  const canvasRef = useRef(null);
  // track the mouse movement if its pressed down or up
  const shouldDraw = useRef(false);
  // state.menu.activeMenuItem gives me either eraser or brush
  // state.menu gives me activeMenuItem and actionmenuitem
  const { activeMenuItem, actionMenuItem } = useSelector((state) => state.menu);
  //based on the top code we set the bottom one
  // state.toolbox[activeMenuItem] gives me color and size of either the brush or eraser
  const { color, size } = useSelector((state) => state.toolBox[activeMenuItem]);

  // Download the canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");
    //if actionmenu item is download then download the canvas
    if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
      //todataURL() is a function which converts the canvas into a base64 string whic
      //represents whatever is drawn on the canvas
      const URL = canvas.toDataURL();
      // to make the canvas downloadable, create
      // an Anchor tag add href, add download, add click button
      // also dispatch actionitemclick to null so that you can
      // download multiple times
      const anchor = document.createElement("a");
      anchor.href = URL;
      anchor.download = "sketch.jpg";
      anchor.click();
      //console.log(URL);
      dispatch(actionItemClick(null));
    }
  }, [actionMenuItem]);
  //this useEffect is for drawing on the canvas
  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    context.strokeStyle = color;
    context.lineWidth = size;
  }, [color, size]);

  //before browser paint, before component mount
  // set the canvas width,height
  useLayoutEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;

    const context = canvas.getContext("2d");

    // put canvas height and width as window
    // height and width
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //console.log(canvas.width);

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

    // when component unmounts remove the eventlisteners
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  console.log("Hire me Email: sohamsdays@gmail.com");
  //console.log(canvasRef.current)
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
