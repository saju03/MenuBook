import bcrypt from 'bcrypt'

const hashPassword = async (password) => {

    const saltRounds = 12;
    try {
       return await bcrypt.hash(password,saltRounds)
     
    } catch (error) {
        console.log(error);
    } 
    
  
}
export default hashPassword