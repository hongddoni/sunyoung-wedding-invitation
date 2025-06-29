import music from "../../assets/audio/alex-productions-lovely.mp3";
import s from "./audio.module.css";
import { useAudio } from "./context/AudioContext";

export const Audio = () => {
	const { audioRef, isPlaying, togglePlay } = useAudio();

	// useEffect(() => {
	// 	// 오디오 컨텍스트 초기화
	// 	const audioContext = new AudioContext();

	// 	// 사용자 상호작용 시 오디오 컨텍스트 재개
	// 	const handleUserInteraction = async () => {
	// 		if (audioContext.state === "suspended") {
	// 			await audioContext.resume();
	// 		}
	// 		setHasInteracted(true);
	// 	};

	// 	document.addEventListener("click", handleUserInteraction);
	// 	document.addEventListener("touchstart", handleUserInteraction);

	// 	return () => {
	// 		document.removeEventListener("click", handleUserInteraction);
	// 		document.removeEventListener("touchstart", handleUserInteraction);
	// 	};
	// }, []);

	return (
		<div className={s.audioContainer}>
			<audio ref={audioRef} src={music} loop preload="auto" />
			<button
				className={s.audioButton}
				onClick={togglePlay}
				aria-label={isPlaying ? "일시정지" : "재생"}
			>
				{isPlaying ? "🔊" : "🔈"}
			</button>
		</div>
	);
};
