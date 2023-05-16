import decode from '../intractors/helpers/decodeCookie.js';
import findAdmin from '../persistance/adminPersistance/findAdminByIDPersistance.js';
const authenticateAdmin = async (req,res) => {
    try {
        const decodedCookie = await decode(req.cookies.admin_jwt)
       const checkUser = findAdmin(decodedCookie.id)
       if(checkUser){
        res.status(200).json({status:true})
       }else{
        res.status(401).json({status:false,error:'unauthorised cookie'})
       }
    } catch (error) {
        if (error) {
            console.log(error);
            return { status: false }
        }
    }

}

export default authenticateAdmin