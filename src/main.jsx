import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductList from './components/productlist.jsx'
import Error from './components/error.jsx'
import { lazy, Suspense } from 'react'

//we are using Lazy loading technique to Optimize our application
const CartItem = lazy(() => import('./components/cartitem.jsx'))
const ProductDetail = lazy(() => import('./components/productdetail.jsx'))
const Checkout = lazy(() => import('./components/checkout.jsx'))


//Implementing Routing technique
const AppRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children:[
      {
        path:"/",
        element: < ProductList />
      },
      {
        path:"/productdetail/:productid",
        element: <Suspense fallback={<div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>}><ProductDetail /></Suspense>
      },
      {
        path: "/cart",
        element:<Suspense fallback={<div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>}><CartItem /></Suspense> 
      }
      ,
      {
        path: "/cart/checkout",
        element: <Suspense fallback={<div className='flex space-x-2 justify-center items-center bg-white h-screen dark:invert'>
          <span className='sr-only'>Loading...</span>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.3s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce [animation-delay:-0.15s]'></div>
          <div className='h-8 w-8 bg-black rounded-full animate-bounce'></div>
      </div>}><Checkout /></Suspense> 
      }
    ],
    errorElement: <Error />
  }
])
createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter} />
)
