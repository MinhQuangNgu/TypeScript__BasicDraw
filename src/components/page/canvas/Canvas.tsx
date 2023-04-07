import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { canvas } from "../../itnerface";
const Canvas: React.FC<canvas> = (prop) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	let pantingRef = useRef<boolean>(false).current;
	const [eraser, setEraser] = useState<boolean>(false);
	const [color, setColor] = useState<string>("black");
	const [size, setSize] = useState<number>(2);
	const [type, setType] = useState<CanvasLineCap>("round");

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		context.fillStyle = "white";
		context.fillRect(0, 0, canvas.width, canvas.height);
	}, []);

	function startPosition(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		pantingRef = true;
		draw(e);
	}
	function endPosition() {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		pantingRef = false;
		context.beginPath();
	}
	function draw(e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) {
		if (!pantingRef) {
			return;
		}
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		if (eraser) {
			context.strokeStyle = "white";
		} else {
			context.strokeStyle = color;
		}
		context.lineWidth = size;
		context.lineCap = type;
		context.lineTo(e.clientX - 30, e.clientY - 20);
		context.stroke();
		context.save();
		context.beginPath();
		context.moveTo(e.clientX - 30, e.clientY - 20);
	}
	function exportCanvas() {
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		const dataURL = canvas.toDataURL();
	}

	const downloadCanvas = () => {
		if (!window.confirm("Bạn có muốn tải xuống ảnh này không?")) {
			return;
		}
		const canvas = canvasRef.current;
		if (!canvas) {
			return;
		}
		const context = canvas.getContext("2d");
		if (!context) {
			return;
		}
		const dataURL = canvas.toDataURL();
		const aTag = document.createElement("a");
		aTag.href = dataURL;
		aTag.download = "draw.png";
		aTag.click();
	};

	return (
		<div>
			<div className="canvas__navbar">
				<div
					onClick={() => {
						setEraser(!eraser);
					}}
					className={`canvas__eraser ${eraser && "active"}`}
				>
					<i className="fa-solid fa-eraser"></i>
				</div>
				<div className="canvas__color">
					<input
						onChange={(e) => {
							setColor(e.target.value);
						}}
						type="color"
					/>
				</div>
				<div className="canvas__size">
					<input
						onChange={(e) => {
							const value = e.target.value;
							if (value) {
								const siz = parseFloat(value) as number;
								setSize(siz);
							}
						}}
						type="number"
						defaultValue={2}
					/>
				</div>
				<div className="canvas__kind">
					<select
						onChange={(e) => {
							const value = e.target.value as CanvasLineCap;
							setType(value);
						}}
					>
						<option value="round">Round</option>
						<option value="butt">Butt</option>
						<option value="square">Square</option>
					</select>
				</div>
				<div className="button">
					<button onClick={exportCanvas}>Tạo Mới</button>
				</div>
				<div className="button">
					<button onClick={downloadCanvas}>Download</button>
				</div>
			</div>
			<canvas
				style={{
					cursor: !eraser
						? "url(https://res.cloudinary.com/sttruyen/image/upload/v1680857385/qmnn06pzfg3i5glxyh0b.svg),auto"
						: "url(https://res.cloudinary.com/sttruyen/image/upload/v1680857204/jplhf5zvnreidqgpbksx.svg),auto",
				}}
				onMouseDown={startPosition}
				onMouseUp={endPosition}
				onMouseMove={draw}
				width={prop?.width || 1000}
				height={prop?.height || 2000}
				className="canvas"
				ref={canvasRef}
			/>
		</div>
	);
};

export default Canvas;
