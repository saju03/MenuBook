import jwt from 'jsonwebtoken';
const decode = async (cookie)=>{
    try {
        return jwt.decode(cookie);

    } catch (error) {
        console.log(error);
    }
}
export default decode