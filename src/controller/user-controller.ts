import { Request, Response } from "express";
import httpStatus from "http-status";
import { userService } from "@/services/user-service";


const postUser = async (req:Request , res:Response) => {
    const {name , username, photo, email, password, admin} = req.body;
   
    if ( name.lenght === 0 
        || username.lenght === 0 
        || photo.lenght === 0 
        || email.lenght === 0 
        || password.lenght === 0 
        || !admin ){
            return res.status(httpStatus.BAD_REQUEST).send("existem campos inválidos!");
    }

    try {
        const result = await userService.createUser({name, username,photo,email,password,admin});

        if (result){
            return res.status(httpStatus.CREATED).send(result.rows);
        }
    } catch (error:any) {
    
        if(error.Error === 'Conflict'){
            return res.status(httpStatus.CONFLICT).send("usuario já cadastrado");
        }
       
        return res.status(httpStatus.BAD_REQUEST).send("houve um erro ao cadastrar");
    }
}

const getUsers = async(req: Request , res: Response) => {
    try {
        const result = await userService.findAll();
        console.log("result", result);
        if (result){
            return res.status(httpStatus.OK).send(result.rows)
        }
    } catch (error) {
        return res.status(httpStatus.BAD_REQUEST).send("houve um erro ao solicitar usuários ou nenhum usuário cadastrado");
    }

}

export const userController = {
    postUser,
    getUsers
}