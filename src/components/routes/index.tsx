import { router } from "../itnerface";
import Home from "../page/home/Home";

export const publicRouter: router[] = [
	{
		element: Home,
		path: "/",
		Layout: null,
	},
];
