import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import Works from "./Pages/Projects.jsx";

import Error from "./Pages/Error.jsx";
import { ThemeCtxProvider } from "./store/modeCtx.jsx";
import { useEffect, useContext } from "react";
import { themeContext } from "./store/modeCtx.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/project/:id", element: <Works /> },
    ],
  },
]);

function AppContent() {
  const { theme } = useContext(themeContext);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return <RouterProvider router={router} />;
}

function App() {
  return (
    <ThemeCtxProvider>
      <AppContent />
    </ThemeCtxProvider>
  );
}

export default App;
