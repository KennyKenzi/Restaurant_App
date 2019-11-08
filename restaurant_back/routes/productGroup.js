var express = require('express');
var router = express.Router();
var ProductGroup = require('../models/productGroupModel')
//const auth = require('../middleware/auth')



router.get('/api/productGroups', async(req, res)=>{
    ProductGroup.find(function(err, products){

        if (err) {
            console.log(err);
        } else {
            res.status(200).send(products);
        }
    })
})



router.post('/api/productGroups', async(req, res)=>{


    try{
        const productgroup = new ProductGroup(req.body)
        console.log(req.body)
        await productgroup.save()
        res.status(200).json(productgroup)
        

    }catch(e){
        console.log('error')
        res.status(505).json(e)
    }
})

router.get('/api/productGroup/update/:id', async(req, res)=>{
    
    let id = req.params.id;
    ProductGroup.findById(id, function(err, prodgrp) {
       
        res.status(200).send(prodgrp)
    });
})


router.post('/api/productGroup/update/:id', (req, res)=>{
    
    ProductGroup.findById(req.params.id, async (err, prodgrp)=>{
        if(!prodgrp)
            res.status(404).send("data is not found");
       
        else
            console.log(req.body)
            prodgrp.productGroup = req.body.productGroup;
            prodgrp.activeStatus = req.body.activeStatus;
            prodgrp.discountID = req.body.discountID;

            try{
                await prodgrp.save()
                res.status(200).json(prodgrp);
               
            }catch(e){
                res.status(400).send("Update not possible");
            }
           
           
            // .catch(err => {
            //     res.status(400).send("Update not possible");
            // });
    })
})



module.exports = router