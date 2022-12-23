const router = require("express").Router();
const { User } = require('../../db');
const postUser  = require('../../controllers/postUser'); 
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.post("/", async(req, res)=>{
    const {name, email,direction,number_phone,type_user} = req.body;

    try {
        
        const newUser = await User.findOrCreate({where: {email: email},
            defaults: {name: name,
            email: email,
            direction: direction?direction:'-',
            number_phone: number_phone?number_phone:'-',
            type_user : type_user?type_user:'Client'}
        });
        res.status(StatusCodes.ACCEPTED).json({
            created: newUser[1] ? 'User created' : 'User already created', user: newUser[0]});
    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).json({error});
    }
});

module.exports = router;