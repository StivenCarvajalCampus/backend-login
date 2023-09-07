import { Expose } from "class-transformer";
import { IsDefined,IsString,IsInt } from "class-validator";

export class dtoUsuario{
    @Expose({name:'usuario_id'})
    @IsDefined({message:()=>{throw{status:422, message:'el campo usuario_id es obligatorio'}}})
    @IsInt({message:()=>{throw {status:422, message:'El campo usuario_id debe ser de tipo int'}}})
    id:number;

    @Expose({name:'usuario'})
    @IsDefined({message:()=>{throw{status:422, message:'el campo usuario es obligatorio'}}})
    @IsString({message:()=>{throw {status:422, message:'El campo usuario debe ser de tipo string'}}})
    usuario:string;

    @Expose({name:'password'})
    @IsDefined({message:()=>{throw{status:422, message:'el campo password es obligatorio'}}})
    @IsString({message:()=>{throw {status:422, message:'El campo password debe ser de tipo string'}}})
    password:string;
    
    @Expose({name:'permisos'})
    @IsDefined({message:()=>{throw{status:422, message:'el campo permisos es obligatorio'}}})
    @IsString({message:()=>{throw {status:422, message:'El campo permisos debe ser de tipo string'}}})
    permisos:string;
    
    constructor(data: Partial<dtoUsuario>){
    Object.assign(this,data);
    this.id=0;
    this.usuario="";
    this.password="";
    this.permisos="";

    }
}