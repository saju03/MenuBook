import decode from '../intractors/helpers/decodeCookie.js';
import findUser from '../persistance/findUserByIDPersistance.js';
const authenticateUser = async (req,res) => {
    try {
        const decodedCookie = await decode(req.cookies.user_jwt)
       const checkUser = findUser(decodedCookie.id)
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

export default authenticateUser