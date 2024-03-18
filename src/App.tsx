import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/DetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
        // loader: async ({ request }) => {
        //   const { searchParams } = new URL(request.url);
        //   const term = searchParams.get("term");
        //   // console.log(request);
        //   if (!term) {
        //     throw new Error("Missing search term");
        //   }

        // },
      },
      {
        path: "/packages/:name",
        element: <DetailsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
