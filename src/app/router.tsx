import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { ArticleDetailPage } from "../pages/ArticleDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/article/:id",
    element: <ArticleDetailPage />,
  },
]);