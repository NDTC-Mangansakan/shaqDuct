import { Outlet } from "react-router"
import Navbar from "../components/Navbar"

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-base-100">
        <Navbar/>

        <main className="max-w-5xl mx-auto px-4 py-8">
            <Outlet/>
        </main>
    </div>
  )
}

export default RootLayout