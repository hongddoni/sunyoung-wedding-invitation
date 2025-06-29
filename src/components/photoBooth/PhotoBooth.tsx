import { useState } from "react";
import s from "./photoBooth.module.css";
import image1 from "../../assets/images/wedding/1.webp";
import image2 from "../../assets/images/wedding/2.webp";
import image3 from "../../assets/images/wedding/3.webp";
import image4_horizontal from "../../assets/images/wedding/4.webp";
import image5_horizontal from "../../assets/images/wedding/5.webp";
import image6_horizontal from "../../assets/images/wedding/6.webp";
import image7_horizontal from "../../assets/images/wedding/7.webp";
import image8_horizontal from "../../assets/images/wedding/8.webp";
import image9 from "../../assets/images/wedding/9.webp";
import image10 from "../../assets/images/wedding/10.webp";
import image11 from "../../assets/images/wedding/11.webp";
import image12 from "../../assets/images/wedding/12.webp";
import image13_horizontal from "../../assets/images/wedding/13.webp";
import image14 from "../../assets/images/wedding/14.webp";
import image15 from "../../assets/images/wedding/15.webp";
import image16 from "../../assets/images/wedding/16.webp";
import image17 from "../../assets/images/wedding/17.webp";
import image18 from "../../assets/images/wedding/18.webp";
import { SlidingModal } from "../slidingModal/SlidingModal";

interface PhotoProps {
	image: string;
	onClick: () => void;
	index: number;
}

const Photo = ({ image, onClick, index }: PhotoProps) => {
	const [isLoaded, setIsLoaded] = useState(false);

	return (
		<div className={s.photo} onClick={onClick}>
			<img
				src={image}
				alt={`wedding-${index + 1}`}
				onLoad={() => setIsLoaded(true)}
				className={isLoaded ? s.loaded : s.loading}
			/>
		</div>
	);
};

export const PhotoBooth = () => {
	const [opened, setOpened] = useState(false);
	const [selectedId, setSelectedId] = useState<number | null>(null);

	const images = [
		// 홍콩
		image13_horizontal,
		image7_horizontal,
		image4_horizontal,
		image14,
		image2,
		image3,
		image9,

		// 일반
		image6_horizontal,
		image12,
		image1,
		image10,
		image5_horizontal,
		image11,

		// 한복
		image18,
		image15,
		image17,
		image16,

		image8_horizontal,
	];

	const onClose = () => {
		setOpened(false);
		setSelectedId(null);
	};

	return (
		<div className={s.photoBooth}>
			{images.map((image, index) => (
				<Photo
					key={index}
					image={image}
					index={index}
					onClick={() => {
						setSelectedId(index);
						setOpened(true);
					}}
				/>
			))}
			{selectedId !== null && (
				<SlidingModal
					opened={opened}
					onClose={onClose}
					images={images}
					selectedId={selectedId}
				/>
			)}
		</div>
	);
};
