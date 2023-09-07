import dotenv from "dotenv";
import { conexion } from "../config/atlas";
import generateToken from "../libs/generateToken";
dotenv.config("../../../")

const validateUser = async (user)=>{
    let db = await conexion();
    let coleccion = db.collection("usuario");
    let result = await coleccion.findOne({usuario:user.usuario, password:user.password})
    if(!result) return false

    let token = await generateToken(result.permisos)
    return {status:200, token};

}
const login = async(req,res)=>{
    try{
        let usuario = await validateUser(req.body);
        if (usuario==false){
            res.status(401).send({message:"User/Password incorrecto"})

        }else{
            res.status(200).send(usuario)
        }

    }catch(error){
        res.status(200).send({message:e.message})

    }
}
export {login};