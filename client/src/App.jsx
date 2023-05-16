import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

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