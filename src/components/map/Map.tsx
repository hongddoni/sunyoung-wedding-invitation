import { useEffect, useRef } from "react";

// 네이버 맵 API 타입 정의
interface NaverMapOptions {
	center: NaverLatLng;
	zoom: number;
}

interface NaverMarkerOptions {
	position: NaverLatLng;
	map: NaverMap;
}

interface NaverLatLng {
	lat(): number;
	lng(): number;
}

interface NaverMap {
	setCenter(latlng: NaverLatLng): void;
	setZoom(zoom: number): void;
}

declare global {
	interface Window {
		naver: {
			maps: {
				Map: new (
					element: HTMLElement,
					options: NaverMapOptions
				) => NaverMap;
				LatLng: new (lat: number, lng: number) => NaverLatLng;
				Marker: new (options: NaverMarkerOptions) => void;
			};
		};
	}
}

const CLIENT_ID = "tuoy3vgu6d";

export const Map = () => {
	const mapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const script = document.createElement("script");
		// 새로운 네이버 클라우드 플랫폼 Maps API URL
		script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${CLIENT_ID}`;
		script.async = true;
		script.onload = () => {
			if (window.naver && mapRef.current) {
				const map = new window.naver.maps.Map(mapRef.current, {
					center: new window.naver.maps.LatLng(37.5665, 126.978), // 위도, 경도
					zoom: 16,
				});

				new window.naver.maps.Marker({
					position: new window.naver.maps.LatLng(37.5665, 126.978),
					map,
				});
			}
		};
		document.head.appendChild(script);

		// 컴포넌트 언마운트 시 스크립트 제거
		return () => {
			const existingScript = document.querySelector(
				`script[src*="oapi.map.naver.com"]`
			);
			if (existingScript) {
				document.head.removeChild(existingScript);
			}
		};
	}, []);

	return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
};
