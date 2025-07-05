import { LinkButton } from "../linkButton/LinkButton";
import naverMap from "../../assets/maps/naver.webp";
import google from "../../assets/maps/google.png";
import tMap from "../../assets/maps/tmap.svg";
import { lang } from "../languageTranslate/lang";
import { useLanguage } from "../languageTranslate/languageProvider";
import weddingMap from "../../assets/images/wedding_map.png";
import s from "./mapButtons.module.css";
import { useParent } from "../parent/useParent";
import classNames from "classnames";

const WEDDING_HOLE_NAVER =
	"https://map.naver.com/p/entry/place/12077860?c=15.00,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202506262326&locale=ko&svcName=map_pcv5L";

const WEDDING_HOLE_GOOGLE =
	"https://www.google.com/maps/place/%EB%8D%94+%ED%85%8C%EB%9D%BC%EC%8A%A4+%EC%9B%A8%EB%94%A9+%26+%ED%8C%8C%ED%8B%B0/data=!3m1!4b1!4m6!3m5!1s0x357c9ac9f99b176b:0xda0eeb1429a7f5e!8m2!3d37.6443318!4d126.7876533!16s%2Fg%2F1thw4nwj?entry=ttu&g_ep=EgoyMDI1MDYyMy4yIKXMDSoASAFQAw%3D%3D";

const WEDDING_HOLE_TMAP = "https://tmap.life/2cd44420";

export const MapsButton = () => {
	const { language } = useLanguage();
	const isParent = useParent();
	return (
		<div className={classNames(s.buttonWrap, { [s.parent]: isParent })}>
			<div className={s.map}>
				<div className={s.mapName}>
					<div className={s.mapNameWrap}>
						<div className={s.date}>{lang[language].date}</div>

						<span className={s.name}>
							{lang[language].weddingHole}
						</span>
						<span className={s.address}>
							{lang[language].address}
						</span>
					</div>

					<div className={s.transport}>
						<span className={s.left}>{lang[language].metro}</span>
						<span className={s.right}>
							{lang[language].howToMetro}
						</span>
					</div>

					<div className={s.transport}>
						<span className={s.left}>{lang[language].bus}</span>
						<span className={s.right}>
							{isParent
								? lang[language].howToBusParent
								: lang[language].howToBus}
						</span>
					</div>

					<div className={s.transport}>
						<span className={s.left}>{lang[language].car}</span>
						<span className={s.carRight}>
							{isParent
								? lang[language].howToCarParent
								: lang[language].howToCar}
						</span>
					</div>
				</div>
				{!isParent && (
					<img
						src={weddingMap}
						alt="weddingMap"
						className={s.mapImage}
					/>
				)}
			</div>
			{isParent && (
				<div className={s.dividerWrap}>
					<span>{lang[language].navigation}</span>
				</div>
			)}
			<div className={s.buttons}>
				<LinkButton
					url={WEDDING_HOLE_NAVER}
					imageUrl={naverMap}
					className={s.button}
				>
					<span>{lang[language].naverMap}</span>
				</LinkButton>
				<hr />
				<LinkButton
					url={WEDDING_HOLE_GOOGLE}
					imageUrl={google}
					className={s.button}
				>
					<span>{lang[language].googleMap}</span>
				</LinkButton>
				<hr />

				<LinkButton
					url={WEDDING_HOLE_TMAP}
					imageUrl={tMap}
					className={s.button}
				>
					<span>{lang[language].tMap}</span>
				</LinkButton>
			</div>

			<div className={s.br}>{lang[language].message}</div>
		</div>
	);
};
