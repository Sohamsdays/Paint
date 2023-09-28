import { useEffect, useRef } from "react";

const Board = () => {
  const canvasRef = useRef(null);

  useEffect(()=>{
    if(!canvasRef.current) return
    const canvas = canvasRef.current
    
    //const context = canvas.getContext("2d")

    // put canvas height and width as window
    // height and width
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    console.log(canvas.width)

  },[])

//console.log(canvasRef.current)
  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
