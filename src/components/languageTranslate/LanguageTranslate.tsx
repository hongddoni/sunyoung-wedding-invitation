import { useLanguage } from "./languageProvider";
import s from "./languageTranslate.module.css";

export const LanguageTranslate = () => {
	const { language, setLanguage } = useLanguage();

	const handleToggle = () => {
		setLanguage(language === "ko" ? "ru" : "ko");
	};

	return (
		<div className={s.container}>
			<span className={s.label}>한국어</span>
			<label className={s.switch}>
				<input
					type="checkbox"
					checked={language === "ru"}
					onChange={handleToggle}
					className={s.input}
				/>
				<span className={s.slider}></span>
			</label>
			<span className={s.label}>Русский</span>
		</div>
	);
};
