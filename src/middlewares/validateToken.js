import passport from "passport.js";

const validateToken = async (req, res, next)=>{
    passport.authenticate("bearer",{session:false}, (error, decoded)=>{
        if(!decoded) return res.status(403).send({status:401, message:"Autenticacion invalida"})
       else{
            let permissions = decoded.toLowerCase();
            let method = (req.method).toLowerCase();
            if (method==permissions){
                return next();
            }else{
                return res.status(403).send({status:403, message: 'No tienes acceso a la pagina que intentas ingresar'})
            }
    
    } 
    })(req,res, next)
}
export{
    validateToken
}