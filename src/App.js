import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Components/login';
import Layout from './Components/layout';
import Home from './Components/home';



const route = createBrowserRouter([{

  path: "/",
  element: <Login/>
}, {
  path: "/home",
  element: <Layout/>,
  children: [
    {
      path: "/home",
      element: <Home/>
    },
    
  ]
},
])

function App() {

  return (
    <div>
        <RouterProvider router={route} />
    </div>
  );
}

export default App;
