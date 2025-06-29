import { createContext, useContext, useState } from "react";
type lang = "ko" | "ru";

export const LanguageContext = createContext<{
	language: lang;
	setLanguage: (language: lang) => void;
}>({
	language: "ko",
	setLanguage: () => {},
});

export const LanguageProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [language, setLanguage] = useState<lang>("ko");

	const value = {
		language,
		setLanguage,
	};

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	return useContext(LanguageContext);
};
