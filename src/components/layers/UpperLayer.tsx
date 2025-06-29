import { Z_INDEX } from "../../types/zIndex";
import s from "./upperLayer.module.css";

interface Props {
	children: React.ReactNode;
}

export const UpperLayer = ({ children }: Props) => {
	return (
		<div className={s.layer} style={{ zIndex: Z_INDEX.LAYER_UPPER }}>
			{children}
		</div>
	);
};
