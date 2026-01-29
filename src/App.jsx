import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import Works from "./Pages/Projects.jsx";

import Error from "./Pages/Error.jsx";

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
function App() {
  return <RouterProvider router={router} />;
}

export default App;
