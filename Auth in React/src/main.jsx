import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.jsx";
import { Provider } from "react-redux";
import store from './store/store.js'

const router = createBrowserRouter([
  {
    path: "/",
    element : <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },

]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  /* </StrictMode> */
);
