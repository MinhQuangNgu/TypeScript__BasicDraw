import { ReactNode } from "react";

export interface router {
	element: React.FC;
	path: string;
	Layout: React.FC<children> | null;
}
export interface children {
	children: ReactNode;
}
export interface canvas {
	width?: number;
	height?: number;
}
