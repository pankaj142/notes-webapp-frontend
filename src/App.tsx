import './App.css';
import Login from './Pages/Login';
import NotesPage from './Pages/NotesPage';
import ErrorPage from './Pages/ErrorPage';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout';

const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : "/",
        element : <NotesPage/>,
      },
      {
        path : "login",
        element : <Login/>,
      }
    ]
  }
  
])
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
