const router = require("express").Router();
const { User } = require('../../db');
const { ReasonPhrases, StatusCodes } = require("http-status-codes");

router.put("/:action", async(req, res)=>{
    const {action} = req.params;
    const {id, name, direction, number_phone,type_user} = req.body;
    let update;

    try {
        if(action == "delete"){
            update = await User.update({banned: true}, {where: {banned: false, id: id}});
        }
        if(action == "activate"){
            update = await User.update({banned: false}, {where: {banned: true, id: id}});
        }
        if(action == "changefields"){
            update = await User.update({name: name, direction: direction, number_phone: number_phone, type_user:type_user}, {where: {id: id}});
        }
        if(update[0] == 0) throw({status: StatusCodes.NOT_MODIFIED, reason: ReasonPhrases.NOT_MODIFIED});
        return res.status(StatusCodes.OK).json({message: "Done!"});
    } catch (error) {
        res.status(404).json({error});
    }
});



module.exports = router;