import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './components/Root/Root.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import HomePage from './components/HomePage/HomePage.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import BookDetails from './components/BookDetails/BookDetails.jsx';
import ListedBook from './components/ListedBooks/ListedBook.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("../public/booksData.json")
        
      },
      {
        path: "/listedBook",
        element: <ListedBook></ListedBook>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      }
    ]
  }
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
