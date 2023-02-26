import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Main from './Layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/details',
          element: <Details></Details>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
          loader: () => fetch('https://e-programming-server.vercel.app/courses')
        }
      ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
