import { useState } from "react";
import s from "./photoBooth.module.css";
import image1 from "../../assets/images/wedding/1.webp";
import image2 from "../../assets/images/wedding/2.webp";
import image3 from "../../assets/images/wedding/3.webp";
import image4 from "../../assets/images/wedding/4.webp";
import image5 from "../../assets/images/wedding/5.webp";
import image6 from "../../assets/images/wedding/6.webp";
import image7 from "../../assets/images/wedding/7.webp";
import image8 from "../../assets/images/wedding/8.webp";
import image9 from "../../assets/images/wedding/9.webp";
import image10 from "../../assets/images/wedding/10.webp";
import image11 from "../../assets/images/wedding/11.webp";
import image12 from "../../assets/images/wedding/12.webp";
import image13 from "../../assets/images/wedding/13.webp";
import image14 from "../../assets/images/wedding/14.webp";
import image15 from "../../assets/images/wedding/15.webp";
import image16 from "../../assets/images/wedding/16.webp";
import image17 from "../../assets/images/wedding/17.webp";
import image18 from "../../assets/images/wedding/18.webp";
import { SlidingModal } from "../slidingModal/SlidingModal";
import { useParent } from "../parent/useParent";
import classNames from "classnames";

export const PhotoBooth = () => {
	const [opened, setOpened] = useState(false);
	const [selectedId, setSelectedId] = useState<number | null>(null);
	const isParent = useParent();

	const images = [
		// 홍콩
		image1,

		image5,
		image4,
		image7,
		image2,
		image3,
		image6,

		// 일반
		image8,
		image12,

		image10,
		image9,
		image11,
		image13,

		// 한복
		image17,
		image18,
		image15,
		image16,
		image14,
	];

	const parentImages = [image1, image18, , image13, image6, image12, image14];

	const onClose = () => {
		setOpened(false);
		setSelectedId(null);
	};

	const handleClick = (index: number) => {
		setSelectedId(index);
		setOpened(true);
	};

	return (
		<div className={classNames(s.photoBooth, isParent && s.parent)}>
			{(isParent ? parentImages : images).map((image, index) => (
				<div
					className={s.photo}
					key={image}
					onClick={() => handleClick(index)}
				>
					<img src={image} alt={`wedding-${index + 1}`} />
				</div>
			))}
			{selectedId !== null && (
				<SlidingModal
					opened={opened}
					onClose={onClose}
					images={isParent ? parentImages : images}
					selectedId={selectedId}
				/>
			)}
		</div>
	);
};
