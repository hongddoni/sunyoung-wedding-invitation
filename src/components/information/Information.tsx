import s from "./information.module.css";
import { useLanguage } from "../languageTranslate/languageProvider";
import { lang } from "../languageTranslate/lang";
import { CopyButton } from "../buttons/CopyButton";
import Copy from "../../assets/icons/copy.svg";
import { useParent } from "../parent/useParent";
import classNames from "classnames";

export const Information = () => {
	const { language } = useLanguage();
	const isParent = useParent();

	return (
		<div className={classNames(s.information, { [s.parent]: isParent })}>
			<div className={s.box}>
				<div className={s.infoWrap}>
					<span className={s.left}>
						<span className={s.bold}>🤵🏻{lang[language].bloom}</span>{" "}
						{lang[language].at}
					</span>
					<div className={s.divider} />
					<div className={s.info}>
						<div className={s.infoItem}>
							<span className={s.role}>
								{lang[language].father}
							</span>
							<span className={s.accountWrap}>
								<CopyButton link={"217024-52-259545"}>
									<div className={s.account}>
										<span>217024-52-259545 농협은행</span>
										<img src={Copy} alt="copy" />
									</div>
								</CopyButton>
							</span>
						</div>

						<div className={s.infoItem}>
							<span className={s.role}>
								{lang[language].mother}
							</span>
							<span className={s.accountWrap}>
								<CopyButton link={"343 07 079051"}>
									<div className={s.account}>
										<span>343-07-079051 우리은행</span>
										<img src={Copy} alt="copy" />
									</div>
								</CopyButton>
							</span>
						</div>

						<div className={s.infoItem}>
							<span className={s.role}>박선용</span>
							<span className={s.accountWrap}>
								<CopyButton link={"1002 613 810313"}>
									<div className={s.account}>
										<span>1002-613-810313 우리은행</span>
										<img src={Copy} alt="copy" />
									</div>
								</CopyButton>
							</span>
						</div>
					</div>
				</div>

				<div className={s.infoWrap}>
					<span className={s.left}>
						<span className={s.bold}>👰🏻‍♀️{lang[language].bride}</span>{" "}
						{lang[language].at}
					</span>

					<div className={s.divider} />
					<div className={s.info}>
						<div className={s.infoItem}>
							<span className={s.role}>소피아</span>
							<span className={s.accountWrap}>
								<CopyButton link={"475-051253-01-012"}>
									<div className={s.account}>
										<span>475-051253-01-012 기업은행</span>
										<img src={Copy} alt="copy" />
									</div>
								</CopyButton>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
