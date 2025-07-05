import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./reset.css";
import { ToastProvider } from "./components/toast/ToastContext.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ToastProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ToastProvider>
	</StrictMode>
);
