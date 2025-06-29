import { createContext, useContext, useRef, useState } from "react";

interface Props {
	children: React.ReactNode;
}

interface AudioContextType {
	audioRef: React.RefObject<HTMLAudioElement | null>;
	isPlaying: boolean;
	isMuted: boolean;
	volume: number;
	togglePlay: () => void;
	toggleMute: () => void;
	handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: Props) => {
	const audioRef = useRef<HTMLAudioElement>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [isMuted, setIsMuted] = useState(false);
	const [volume, setVolume] = useState(0.5);

	const togglePlay = async () => {
		if (audioRef.current) {
			try {
				if (isPlaying) {
					await audioRef.current.pause();
				} else {
					await audioRef.current.play();
				}
				setIsPlaying(!isPlaying);
			} catch (error) {
				console.error("재생 실패:", error);
			}
		}
	};

	const toggleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (audioRef.current) {
			audioRef.current.volume = Number(e.target.value);
			setVolume(Number(e.target.value));
		}
	};

	return (
		<AudioContext.Provider
			value={{
				audioRef,
				isPlaying,
				isMuted,
				volume,
				togglePlay,
				toggleMute,
				handleVolumeChange,
			}}
		>
			{children}
		</AudioContext.Provider>
	);
};

export const useAudio = () => {
	const context = useContext(AudioContext);
	if (!context) {
		throw new Error("useAudio must be used within an AudioProvider");
	}
	return context;
};
