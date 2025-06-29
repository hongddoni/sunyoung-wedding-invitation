import s from "./animateText.module.css";

interface Props {
	children: string;
	delay?: number;
	type?: "fadeUp" | "typewriter";
	color?: string;
}

export const AnimateText = (props: Props) => {
	const { children, delay = 0.05, type = "fadeUp", color = "#000" } = props;

	const arrText = Array.from(children);

	return (
		<p className={s.text}>
			{arrText.map((text, index) => (
				<span
					className={`${s.chunk} ${s[type]}`}
					key={index}
					style={{
						animationDelay: `${index * delay}s`,
						fontWeight: 700,
						color,
					}}
				>
					{text === " " ? "\u00A0" : text}
				</span>
			))}
		</p>
	);
};
