import React, { useRef, useEffect, useState } from "react";

const SignaturePad = () => {
  const canvasRef = useRef(null);
  const clearBtnRef = useRef(null);
  const saveBtnRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [signed, setSigned] = useState(false);

  const updateCanvasSize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const canvasBox = document.querySelector(".canvas-box");
      canvas.width = canvasBox.offsetWidth * 0.9;
      canvas.height = canvasBox.offsetHeight * 0.9;
    }
  };

  const getTouchPos = (canvas, touchEvent) => {
    const rect = canvas.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top,
    };
  };

  const startDrawing = (x, y) => {
    setIsDrawing(true);
    setLastPosition({ x, y });
    setSigned(true);
    clearBtnRef.current.style.display = "inline-block";
  };

  const draw = (x, y) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(lastPosition.x, lastPosition.y);
    context.lineTo(x, y);
    context.stroke();
    setLastPosition({ x, y });
  };

  const handleMouseDown = (e) => startDrawing(e.offsetX, e.offsetY);
  const handleTouchStart = (e) => {
    e.preventDefault();
    const pos = getTouchPos(canvasRef.current, e);
    startDrawing(pos.x, pos.y);
  };
  const handleMouseMove = (e) => {
    if (!isDrawing) return;
    draw(e.offsetX, e.offsetY);
  };
  const handleTouchMove = (e) => {
    e.preventDefault();
    if (!isDrawing) return;
    const pos = getTouchPos(canvasRef.current, e);
    draw(pos.x, pos.y);
  };
  const stopDrawing = () => setIsDrawing(false);

  const handleClear = (e) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    setSigned(false);
    clearBtnRef.current.style.display = "none";
  };

  const handleSave = (e) => {
    e.preventDefault();
    const saveBtn = saveBtnRef.current;

    // Show loader
    saveBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';
    saveBtn.disabled = true;

    if (!signed) {
      new Noty({
        text: "Please sign before submitting!",
        type: "error",
        theme: "mint",
        layout: "bottomRight",
        timeout: 2500,
      }).show();

      // Hide loader
      saveBtn.innerHTML = "Submit";
      saveBtn.disabled = false;

      return;
    } else {
      const canvas = canvasRef.current;
      const dataURL = canvas.toDataURL("image/png");
      document.getElementById("imageData").value = dataURL;

      // submit form
      let form = document.getElementById("mark-form");
      form.submit();
    }
  };

  useEffect(() => {
    window.addEventListener("resize", updateCanvasSize);
    window.addEventListener("load", updateCanvasSize);
    updateCanvasSize();
    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("load", updateCanvasSize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("touchstart", handleTouchStart);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("touchmove", handleTouchMove);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);
    canvas.addEventListener("touchend", stopDrawing);
    canvas.addEventListener("touchcancel", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("touchstart", handleTouchStart);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("touchmove", handleTouchMove);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
      canvas.removeEventListener("touchend", stopDrawing);
      canvas.removeEventListener("touchcancel", stopDrawing);
    };
  }, [isDrawing, lastPosition]);

  return (
    <div className="canvas-box my-2 rounded w-4/5 ">
      <canvas id="signaturePad" ref={canvasRef} className="border" />
      <button
        id="clearBtn"
        ref={clearBtnRef}
        onClick={handleClear}
        style={{ display: "none" }}
        className="py-1 px-3 bg-slate-900 text-white rounded mt-2 mx-3"
      >
        Clear
      </button>
      <button
        id="saveBtn"
        ref={saveBtnRef}
        onClick={handleSave}
        className="py-1 px-3 bg-green-500 text-white rounded mt-2"
      >
        Submit
      </button>
      <input type="hidden" id="imageData" />
    </div>
  );
};

export default SignaturePad;
