import { NextApiRequest, NextApiResponse } from 'next';

export default async (req:NextApiRequest, res:NextApiResponse) =>{
    const {email, password} = req.body;
    //comparar segun la bd si el usuario existe

    if(email!== 'c@c') {
            return res.status(404).json({message: 'User not found'});
    }

    if(password !== '123') {
        return res.status(401).json({message: 'Password is incorrect'});
    }

    return res.status(200).json({message: 'Login success'});
}
