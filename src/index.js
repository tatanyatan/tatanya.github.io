import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Blog from './Blog';
import About from './About';
import Schoolcola from "./School";
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Astroseans from './Seans';
import Erore404 from './Erore';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/astroseans",
        element: <Astroseans />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/school",
        element: <Schoolcola />,
      },
       // Добавляем страницу 404 для всех остальных путей
       {
        path: "*",
        element: <Erore404 />, // Замените Error404 на ваш компонент ошибки
      },
    ]
  },
]);

function Root() {
  return (<>
    <Header />
    <Outlet />
    <Footer />
  </>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
