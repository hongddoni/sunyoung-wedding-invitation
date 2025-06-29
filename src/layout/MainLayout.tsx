import s from "./mainLayout.module.css";

interface Props {
	children: React.ReactNode;
}

export const MainLayout = ({ children }: Props) => {
	return <div className={s.layout}>{children}</div>;
};
