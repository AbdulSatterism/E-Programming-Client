import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
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
          path: '/courses',
          element: <Courses></Courses>
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
