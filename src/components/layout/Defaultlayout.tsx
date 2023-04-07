import React from "react";
import { children } from "../itnerface";

const Defaultlayout: React.FC<children> = ({ children }) => {
	return <div>{children}</div>;
};

export default Defaultlayout;
