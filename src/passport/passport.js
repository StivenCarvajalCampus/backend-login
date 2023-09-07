import passport from "passport";
import { Strategy as Bearer} from "passport-http-bearer";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config("../../")

passport.use(new Bearer(
   function(token, done){
    return jwt.verify(token, process.env.JWT_PRIVATE_KEY, {algorithms: "HS256"}, (err, decoded) => {
        err ? done(err) : done(false, decoded, {scope: "*"})
    })
   }   
))

export default passport; 
