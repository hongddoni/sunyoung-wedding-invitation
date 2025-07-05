import { createContext } from "react";

export const ParentContext = createContext<{
	isParent: boolean;
}>({
	isParent: false,
});
