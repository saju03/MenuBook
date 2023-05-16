/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useCookies } from "react-cookie"
import { Link, useLocation, useNavigate , } from "react-router-dom"

const Navbar = ()=>{
    const [cookies, setCookie , removeCookie] = useCookies();
    const navigate = useNavigate()
    const location = useLocation()
    const[isAdmin,setAdmin]= useState(false)
    const[userLoggedIn,setUserLogged] = useState(false)
    const[adminLoggedIn,setAdminLogged] = useState(false)

    useState(()=>{
        if(location.pathname.includes('/admin')){
        setAdmin(true)
        }

        if(cookies.user_jwt){
            setUserLogged(true)
        }
        if(cookies.admin_jwt){
            setAdminLogged(true)
        }
        
    },[])

    const logoutAdmin = (e)=>{
        e.preventDefault()
        removeCookie('admin_jwt')
        navigate('/admin/login')
    }
    const logoutUser = (e)=>{
        e.preventDefault()
        removeCookie("user_jwt")
        navigate('/login')
    }

    return(
        <div>

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            {isAdmin ?  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MenuBook ADMIN</span> : <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MenuBook</span>}
           
        </a>
        <div className="flex items-center">
            <Link to="tel:5541251234" className="mr-6 text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</Link>
            {isAdmin ? <Link to='/admin/login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline" onClick={logoutAdmin}>{adminLoggedIn ? 'ALogout' : 'ALogin'}</Link> : <Link to='/login' className="text-sm  text-blue-600 dark:text-blue-500 hover:underline"   onClick={logoutUser}>{userLoggedIn ? 'Logout' : 'Login'}</Link>}
          
        </div>
    </div>
</nav>
<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    {isAdmin ?  <Link  className="text-gray-900 dark:text-white hover:underline" aria-current="page">Menu</Link>: <Link href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</Link>}
                    
                </li>
                <li>
                {isAdmin ?  <Link  className="text-gray-900 dark:text-white hover:underline" aria-current="page">Users</Link>: <Link href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Profile</Link>}
                </li>
           
            </ul>
        </div>
    </div>
</nav>

        </div>
    )
}

export default Navbar