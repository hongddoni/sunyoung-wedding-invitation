import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import { ToastProvider } from "./components/toast/ToastContext.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ToastProvider>
			<App />
		</ToastProvider>
	</StrictMode>
);
