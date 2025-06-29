import s from "./ment.module.css";
import { useLanguage } from "../languageTranslate/languageProvider";
import { lang } from "../languageTranslate/lang";
import DoorImage from "../../assets/images/door.png";
import { useState } from "react";

export const Ment = () => {
	const { language } = useLanguage();
	const [show, setShow] = useState(false);

	return (
		<div className={s.mentWrap}>
			<div className={s.ring} onClick={() => setShow(!show)}>
				{show ? "🤵🏻💍👰🏻‍♀️" : "💍"}
				{show && (
					<span className={s.ringText}>We will be married!</span>
				)}
			</div>
			<p className={s.ment}>{lang[language].ment}</p>
			<img src={DoorImage} alt="door" />
			<div className={s.nameWrap}>
				<span>
					{" "}
					<span className={`${language === "ru" ? s.russia : ""}`}>
						{lang[language].parentSy}
					</span>{" "}
					<span className={s.name}>선용</span>
				</span>
				<span>
					<span className={`${language === "ru" ? s.russia : ""}`}>
						{lang[language].parentSf}
					</span>
					<span className={s.name}>Sofia</span>
				</span>
				<div className={s.br} />
			</div>
		</div>
	);
};
