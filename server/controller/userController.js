import signupUserInteractor from '../intractors/signupUserInteractor.js';
import userLoginIntractor from '../intractors/loginUserIntractor.js';
import createToken from '../intractors/helpers/createToken.js';

const userSignup = async (req,res,next)=>{
    const {userName,email,password} = req.body
    try {
        const userSignup = await signupUserInteractor(userName,email,password)
      
        if(userSignup.status){
                res.cookie('user_jwt',userSignup.Token,{
                withCrdentials:true,
                httpOnly:false,
                maxAge:864000000         
            });
            res.status(201).json({created:true})
        }else{
           res.status(409).json({created:false,error:userSignup})
        }
    } catch (error) {
        console.log(error);
       
    }

}

const userLogin = async (req,res,next)=>{
    const {email,password} = req.body

    const userLogin = await userLoginIntractor(email,password)
    if(userLogin.status){
      const Token = createToken(userLogin.id)

      res.cookie('user_jwt',Token,{
        withCrdentials:true,
        httpOnly:false,
        maxAge:864000000      
      })

        res.status(200).json({status:true,message:'user authenticated'})
    }else{
        res.status(401).json({status:false,error:userLogin.error})
    }
    
}
export {userSignup,userLogin}