import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import './index.css'
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";



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
        
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
}

export default App;