/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express= require("express");
const router=express.Router();
const upload=require('../config/multer-config');
const productModel=require('../models/product-model')


router.post("/create",upload.single("image"),async(req,res)=>{
   try{
     let {name,price,discount,bgcolor,panelcolor,textcolor}=req.body;

    let product=await productModel.create({
        image:req.file.buffer,
        name,
        price,
        discount,
        bgcolor,
        panelcolor,
        textcolor,
    })
    req.flash("success","Product created Successfully..!");
    res.redirect("/owners/admin");
    // res.send(product);
    // res.send(req.file);
}
catch(err)
{
    res.send(err.message);
}
});

module.exports=router;