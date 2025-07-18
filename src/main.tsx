import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/home/HomePage.tsx'
import AboutPage from './pages/about/AboutPage.tsx'
import ServicePage from './pages/service/ServicePage.tsx'
import CasesPage from './pages/cases/CasesPage.tsx'
import PricingPage from './pages/pricing/PricingPage.tsx'
import BlogPage from './pages/blog/BlogPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { 
        path: "/",
        Component: HomePage,
      },
      {
        path: "/about",
        Component: AboutPage,
      },
      {
        path: "/services",
        Component: ServicePage,
      },
      {
        path: "/cases",
        Component: CasesPage,
      },
      {
        path: "/pricing",
        Component: PricingPage,
      },
      {
        path: "/blog",
        Component: BlogPage,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
