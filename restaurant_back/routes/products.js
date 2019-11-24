var express = require('express');
var router = express.Router();
var Product = require('../models/productsModel')

//const auth = require('../middleware/auth')



router.get('/api/products', async(req, res, next)=>{
    Product.find(function(err, products){

        if (err) {
            console.log(err);
        } else {
            res.status(200).send(products);

        }
    })
})



router.post('/api/products', async(req, res, next)=>{

    console.log('here', req.body)
    try{
        const product = new Product(req.body)
        await product.save()
        res.status(200).json(product)
        
 
    }catch(e){
        console.log('error', e)
        res.status(505).json(e)
    }
})

router.get('/api/product/update/:id', async(req, res)=>{
    
    let id = req.params.id;
    Product.findById(id, async function (err, prod) {
       
        
        let newProd = await Product.calculateDiscount(prod)
        console.log('router point', newProd)
        res.status(200).send(newProd)
        
    });
})  

router.get('/api/product/sale/:id', async(req, res)=>{
                
    let id = req.params.id
    Product.find({productGroupID:id}, function(err, prods) {
        // console.log('router point', newProd)
        res.status(200).send(prods)
    });

})



router.post('/api/product/update/:id', (req, res)=>{
    
    Product.findById(req.params.id, async (err, prod)=>{
        if(!prod)
            res.status(404).send("data is not found");
       
        else
            // console.log(req.body)
            prod.productGroup = req.body.productGroup;
            prod.productGroupID = req.body.productGroupID;
            prod.name = req.body.product;
            prod.price = req.body.price;
            prod.unitOfMeasure = req.body.UOM;
            prod.activeStatus = req.body.activeStatus;
            prod.discountID = req.body.discountID;

            try{
                console.log(prod)
                await prod.save()
                res.status(200).json(prod);
               
            }catch(e){
                res.status(400).send("Update not possible");
            }
           


           
            // .catch(err => {
            //     res.status(400).send("Update not possible");
            // });
    })
})

module.exports = router