var express = require('express');
var router = express.Router();
var Discount = require('../models/discountModel')
//const auth = require('../middleware/auth')



router.get('/api/discounts', async(req, res)=>{
    Discount.find(function(err, discount){

        if (err) {
            console.log(err);
        } else {
            res.status(200).send(discount);
        }
    })
})



router.post('/api/discounts', async(req, res)=>{

    console.log('here', req.body)
    try{
        const discount = new Discount(req.body)
        await discount.save()
        res.status(200).json(discount)
        
 
    }catch(e){
        console.log('error', e)
        res.status(505).json(e)
    }

})

router.get('/api/discount/update/:id', async(req, res)=>{
    
    let id = req.params.id;
    Discount.findById(id, function(err, disc) {
       
        res.status(200).send(disc)
    });
})



router.post('/api/discount/update/:id', (req, res)=>{
    
    Discount.findById(req.params.id, async (err, discount)=>{
        if(!discount)

            res.status(404).send("data is not found");
       
        else
            console.log(req.body)
            discount.discountName = req.body.discountName;
            discount.discountAmount = req.body.discountAmount;
            discount.discountType = req.body.discountType;
            discount.activeStatus = req.body.activeStatus;

            try{
                await discount.save()
                res.status(200).json(discount);
               
            }catch(e){
                res.status(400).send("Update not possible");
            }

    })
})



module.exports = router