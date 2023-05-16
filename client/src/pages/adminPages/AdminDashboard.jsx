import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import UserCards from "../../components/userCards/UserCards";
function AdminDashboard() {

    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookie, removeCookie] = useCookies();
    const verifyAdmin = async () => {
        const jwt = cookies;
        if (jwt.admin_jwt) {
                  try {
                const { data } = await axios.get("http://localhost:3000/admin", {
                    withCredentials: true,
                });
                if (data.status) {
                    navigate("/admin");
                } else {
                    removeCookie("admin_jwt");
                    navigate("/admin/login");
                }
            } catch (error) {
                console.log(error);
            }
        }else{
            navigate("/admin/login");
        }
    };


    useEffect(() => {
        verifyAdmin()
    }, [])
  return (
    <div className="flex justify-center">
        <UserCards />
    </div>
  )
}

export default AdminDashboard