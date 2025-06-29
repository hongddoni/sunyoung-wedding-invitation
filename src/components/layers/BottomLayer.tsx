import s from "./bottomLayer.module.css";
import headline from "../../assets/images/headline.webp";

interface Props {
	children?: React.ReactNode;
}

export const BottomLayer = ({ children }: Props) => {
	return (
		<div className={s.layer}>
			<img src={headline} alt="headline" className={s.headline} />
			{children}
		</div>
	);
};
