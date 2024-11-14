import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ThemProvider from "./theme/ThemProvider";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render (
    <BrowserRouter>
        <ThemProvider>
            <App/>
        </ThemProvider>
    </BrowserRouter>,
    
)