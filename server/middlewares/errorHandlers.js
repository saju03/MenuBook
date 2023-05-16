const handelErrors = (err) =>{

    console.log(err);
    let errors ={email:'',password:'',status:false}

    if(err.code===11000){
        errors.email = 'This Email is already regestered '
    }

    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    if(err.message.includes('doctor validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    if(err.message=='incorrect password'){
        errors.password = 'incorrect password'

    }
    if(err.message=='incorrect Email'){
        errors.password = 'incorrect Email'

    }
    if(err.message=='no user found'){
        errors.email = 'no user with this email'
    }
    console.log(errors);

    return errors
}

export default handelErrors