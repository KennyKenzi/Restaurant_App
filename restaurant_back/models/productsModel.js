var Discount = require('./discountModel')
var ProductGroup = require('./productGroupModel')
var config = require('../config/config')


const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({

    productGroup:{
        type: String,
        required: true
    },
    productGroupID:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },

    price:{
        type: Number,
        required: true,
        trim: true
    },

    unitOfMeasure: {
        type: String,
        required: true
    },

    discountID: {
        type: String
    },

    // displayStringForProd: {
    //     type: String,
    //     default: ''
    // },
    // displayStringForProdGrp: {
    //     type: String,
    //     default: ''
    // },

    activeStatus: {
        type: Boolean,
        required: true
    }
})




productSchema.statics.calculateDiscount= async (prod)=>{

    console.log('1',prod)
 

    const prodGrp = await ProductGroup.findById(prod.productGroupID)
    console.log('2',prodGrp)

    let alteredProd 
    if (prodGrp.discountID){ 

        let discProd = await Discount.findById(prodGrp.discountID)
        console.log('2.5', discProd)
        
            if(discProd.discountType === 'Flat'){
                console.log('3','product group flat discount')
                    alteredProd = prod
                    //alteredProd.originalPrice = prod.price
                    alteredProd.discountedPrice = alteredProd.price- discProd.discountAmount
                    if (alteredProd.discountedPrice < 0) {
                        alteredProd.discountedPrice = 0
                    }
                    alteredProd.displayStringForProdGrp = `Discount of #${discProd.discountAmount} is being applied to each ${alteredProd.unitOfMeasure} of all ${prodGrp.productGroup} \n`
                    

            }else if (discProd.discountType === 'percentage'){
                console.log('4','product group percentage discount')
                alteredProd = prod
               // alteredProd.originalPrice = prod.price
                alteredProd.discountedPrice = alteredProd.discountedPrice - (alteredProd.discountedPrice * (discProd.discountAmount/100))
                alteredProddisplayStringForProdGrp = `Discount of ${discProd.discountAmount}% is being applied to each ${alteredProd.unitOfMeasure} of all ${prodGrp.productGroup} \n`

            }
        console.log('5',alteredProd)

        return config(alteredProd)


    }else{
        alteredProd = prod
        alteredProd.discountedPrice = alteredProd.price
        console.log('5.5', alteredProd)
        return config(alteredProd)
    

    }

        // return alteredProd
  


    //console.log(newProd)

}
   




const Product = mongoose.model('Product', productSchema)

module.exports = Product