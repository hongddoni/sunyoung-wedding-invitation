import { createContext, useState } from "react";

interface LayerContextType {
	bottomHeight: number;
	setBottomHeight: (height: number) => void;
}

export const LayerContext = createContext<LayerContextType | null>(null);

interface Props {
	children: React.ReactNode;
}

export const LayerProvider = ({ children }: Props) => {
	const [bottomHeight, setBottomHeight] = useState(0);

	return (
		<LayerContext.Provider value={{ bottomHeight, setBottomHeight }}>
			{children}
		</LayerContext.Provider>
	);
};
