import Home from './routes/Home';
import App from './App';
import {createBrowserRouter} from 'react-router-dom';
import About from './routes/About';
import Chefs from './routes/Chefs';
import Menu from './routes/Menu';
import Events from './routes/Events';
import Gallery from './routes/Gallery';
import Contact from './routes/Contact';
import BookATable from './routes/BookATable';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/chefs",
        element: <Chefs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/book-a-table",
        element: <BookATable />,
      },
    ]
  },
  // {
  //   path: "about",
  //   element: <div>About</div>,
  // },
]);

export default router;
