import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';
dotenv.config("../../");

export async function conexion(){
    try{
        const uri = `mongodb+srv://${process.env.ATLAS_USER}:${procces.env.ATLAS_PASSWORD}@cluster0.bzjkog5.mongodb.net/${procces.env.ATLAS_DB}`;
        const options={
            useNewUrlParser:true,
            useUnifiedTopology:true,
        };
        const client = await MongoClient.connect(uri, options);
        return client.db();


    }catch (error){
        return{status:500, message:error.message}

    }
}