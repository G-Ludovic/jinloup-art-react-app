import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage/HomePage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import ContactPage from "./pages/ContactPage/ContactPage";

const router = createBrowserRouter([
  {
    element: <App />,
    path: "/",
    children: [
      {
        element: <HomePage />,
        path: "/home",
      },
      {
        element: <GalleryPage />,
        path: "/gallery",
      },
      {
        element: <ContactPage />,
        path: "/contact",
      },
    ],
  },
]);

export default router;
