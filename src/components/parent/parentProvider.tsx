import { ParentContext } from "./parentContext";
import { useSearchParams } from "react-router-dom";

export const ParentProvider = ({ children }: { children: React.ReactNode }) => {
	const [searchParams] = useSearchParams();
	const isParent = searchParams.get("parent");

	return (
		<ParentContext.Provider value={{ isParent: !!isParent }}>
			{children}
		</ParentContext.Provider>
	);
};
