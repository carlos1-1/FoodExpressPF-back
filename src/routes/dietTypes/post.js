const router = require("express").Router();
const postDietType = require('../../controllers/postDietType');
const { StatusCodes } = require("http-status-codes");


router.post('/:name',async (req,res)=>{
  const { name } = req.params
    try{
        const created  =  await postDietType(name)

        return res
        .status(StatusCodes.CREATED)
        .send({message: "Diet type category succesfully created!",category:created})
      ;

       }catch(e){
           return res.status(400).json({ error: e.message })
       }
    
})

module.exports = router;