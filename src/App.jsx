// import React from 'react'
// import { useState, useEffect } from 'react'

// function App() {
//   let [mode, setMode]=useState(false)
//   console.log(mode);
  

//   useEffect(() => {
//       if(mode){
//        document.body.classList.add('dark')
//       }else{
//         document.body.classList.remove("dark");
//       }
//   },[mode])

//   return (
//     <div>
//       <button onClick={() => setMode(!mode)}>{mode?'light': 'dark'}</button>
//     </div>
//   )
// }

// export default App


import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Public from "./Layouts/Public"
import React from 'react'
import HomePage from './pages/HomePage'
import Users from './pages/Users'
import Posts from './pages/Posts'
import Coment from './pages/Coment'

function App() {

  
  let routes = createBrowserRouter([
    {
      path:"/",
      element:<Public/>,
      children:[
        {
          index:true,
          element:<HomePage/>,
        },
        {
          path:'/Users',
          element:<Users/>
        },
        {
          path:"/Posts",
          element:<Posts/>,
        },
        {
          path:"/Coment",
          element:<Coment/>
        },
      ],
    },
  ])
  

  return (<RouterProvider router={routes}/>)
}

export default App
