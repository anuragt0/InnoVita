const router = require('express').Router();
const Ingredient = require("../database/Models/Ingredient");


router.post("/add-ingredient", async (req,res)=>{
    const ingredientDetails = req.body;
    let name = ingredientDetails.ingredientName;
    name = name.toLowerCase();
    let i = 0;
    let newName = "";
    while(i<name.length){
        if(name[i]!==' '){
            newName += name[i];
            i++; continue;
        }
        while(i!=name.length && name[i]===' '){
            i++;
        }
        if(i!=name.length)
            newName += "-";
    }
    ingredientDetails.ingredientName = newName;

    try {
        const newIngredient = await Ingredient.create(ingredientDetails);
        res.json({success: true, message: "Ingredient added", newIngredient});
    } catch (error) {
        console.log(error);
        res.json({success :false, message: "Unable to add ingredient", err: error.message})
    }
})



module.exports = router;