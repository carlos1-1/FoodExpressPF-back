const router = require("express").Router();
const { StatusCodes } = require("http-status-codes");
const {DietTypes} = require("../../db");


router.delete('/',async (req,res)=>{
  const data = req.body
  console.log(data)
  try{
    const deleteType = await DietTypes.destroy({ where: { name:data } });
    console.log(deleteType)
      
    res.status(200).json({ message: `${deleteType} Category(ies) deleted`});
  }catch(e){
    res.status(404).json({ error: e.message });
  }
    
})

module.exports = router;