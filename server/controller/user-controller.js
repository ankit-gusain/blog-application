import { response } from "express";
import User from "../model/user.js";


const SignupUser = async (req, res) => {
    try {
        const obj = request.body;
        const newUser = new User(obj);
        await newUser.save();

        return res.status(200).json({ msg: "Signup Successfull" });
        await newUser.save();

    }
    catch (error) {
        return res.status(500)({msg:"Error while signing up the user"})
    }
}

export default SignupUser;
