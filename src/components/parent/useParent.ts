import { useContext } from "react";
import { ParentContext } from "./parentContext";

export const useParent = () => {
	const { isParent } = useContext(ParentContext);

	return isParent;
};