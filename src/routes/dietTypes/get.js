const router = require("express").Router();
const  getTypes  = require('../../controllers/getDietTypes');
const { StatusCodes } = require("http-status-codes");


router.get('/',async (req,res)=>{
    try{
        const dietTypes = await getTypes()
        res
        .status(StatusCodes.OK)
        .json(dietTypes)

       }catch(e){
           return res.status(400).json({ error: e.message })
       }
    
})

module.exports = router;