import { createBrowserRouter, createRoutesFromElements, Navigate, Route, RouterProvider, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import ProfilePage from "./pages/ProfilePage"
import CreatePage from "./pages/CreatePage"
import EditProductPage from "./pages/EditProductPage"
import RootLayout from "./layout/RootLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/edit/:id" element={<EditProductPage />} />
    </Route>
  )
)


const App = () => {
  return <RouterProvider router={router}/>
}

export default App