import dotenv from "dotenv";
import { conexion } from "../config/atlas.js";
import generateToken from "../libs/generateToken.js";
dotenv.config("../../../")

const validateUser = async (user)=>{
    let db = await conexion();
    console.log(db);
    //revisar conexion 
    let collection = db.collection("usuario");
    let result = await collection.findOne({usuario:user.usuario, password:user.password})
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
        res.status(200).send({message:error.message})

    }
}
export {login};