import { StrictMode } from "react";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import router from "./routes/Routes.tsx";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster closeButton duration={2000} />
    </Provider>
  </StrictMode>
);
