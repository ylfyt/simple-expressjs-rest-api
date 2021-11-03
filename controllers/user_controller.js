import Joi from '@hapi/joi';
import Users from '../models/User.js';


const schema = Joi.object({
    username: Joi.string().min(4).required(),
    password: Joi.string().min(3).required()
});

export const register = async (req, res) => {
    const validation = schema.validate(req.body);
    if (validation.error){
        return res.status(400).json({error: validation.error.details[0].message});
    }

    try {
        const userExist = await Users.findOne({username: req.body.username});
        if (userExist){
            return res.status(400).json({error: 'User is already exist'});
        }

        const newUser = new Users({username: req.body.username, password: req.body.password});
        const savedUser = await newUser.save();
        return res.json(savedUser);
    } catch (error) {
        return res.status(400).json({error: error.message});
    }
    
}

export const login = (req, res) => {
    res.send('login');
}