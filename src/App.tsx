import { UpperLayer } from "./components/layers/UpperLayer";
import { BottomLayer } from "./components/layers/BottomLayer";
import { MainLayout } from "./layout/MainLayout";
import { LayerProvider } from "./components/layers/LayerContext";
import { Audio } from "./components/audio/Audio";
import { AudioProvider } from "./components/audio/context/AudioContext";
import { BodyLayout } from "./layout/BodyLayout";
import { PhotoBooth } from "./components/photoBooth/PhotoBooth";
import { Information } from "./components/information/Information";
import { LanguageProvider } from "./components/languageTranslate/languageProvider";
import { LanguageTranslate } from "./components/languageTranslate/LanguageTranslate";
import { MapsButton } from "./components/maps/MapsButton";
import { Ment } from "./components/ment/Ment";
import { ParentProvider } from "./components/parent/parentProvider";

function App() {
	return (
		<MainLayout>
			<ParentProvider>
				<LanguageProvider>
					<AudioProvider>
						<LayerProvider>
							<div>
								<BottomLayer />
								<UpperLayer>
									<BodyLayout>
										<Ment />
										<MapsButton />
										<Information />
										<PhotoBooth />
									</BodyLayout>
								</UpperLayer>
							</div>
						</LayerProvider>
						<Audio />
						<LanguageTranslate />
					</AudioProvider>
				</LanguageProvider>
			</ParentProvider>
		</MainLayout>
	);
}

export default App;
