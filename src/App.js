import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import Details from './components/Details/Details';
import Home from './components/Home/Home';
import Main from './Layout/Main';
import { Toaster } from 'react-hot-toast';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import PrivateRoute from './Routes/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';

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
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/checkout',
          element: <CheckOut></CheckOut>
        },

        {
          path: '/courses',
          element:
            <Courses></Courses>,
          loader: () => fetch('https://e-programming-server.vercel.app/courses')
        }
      ]
    },
    {
      path: '/details/:id',
      element: <Details></Details>,
      loader: ({ params }) => fetch(`https://e-programming-server.vercel.app/course/details/${params.id}`)
    }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
