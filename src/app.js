import express from 'express';
import passport from 'passport';
import dotenv from 'dotenv';
import appLogin from './routers/login.js';



dotenv.config();
let appExpress = express();
appExpress.use(express.json());
appExpress.use(passport.initialize());

appExpress.use(appLogin);

appExpress.use("/",(req,res)=>{
    res.status(404).json({status:"404",message:"la ruta no se encuentra"})
})
let config = JSON.parse(process.env.SERVER)
appExpress.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`)
})
