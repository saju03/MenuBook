import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/userPages/HomePage";
import SignupPage from "./pages/userPages/SignupPage";
import LoginPage from "./pages/userPages/LoginPage";
import AdminLogin from "./pages/adminPages/AdminLogin";
import AdminDashboard from "./pages/adminPages/AdminDashboard";

function App() {
  
  const AppLayout = () => {
    return (
      <>
      
        <Navbar />
        <Outlet />
      
      </>
    );
  };
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      
      children: [
        { path: "/", 
        element: <HomePage /> 
        },
        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          path: "/login",
          element: <LoginPage />,
        },
        {
          path:'/admin/login',
          element:<AdminLogin />
        },
        {
          path:'/admin',
          element:<AdminDashboard />
        }
        
      ],
    }
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;