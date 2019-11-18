var Discount = require('./discountModel')

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

    displayString: {
        type: String
    },

    activeStatus: {
        type: Boolean,
        required: true
    }
})



productSchema.statics.calculateDiscount= async (prod)=>{

    //console.log(prod)
    let newProd

    if(prod.discountID){
        
        const disc = await Discount.findById(prod.discountID)
        // console.log(disc)
        // console.log(prod)
        

        if(disc.activeStatus){

                if(disc.discountType === 'Flat'){

                    console.log('this is flat rate')
                    newProd=prod
                    newProd.price = newProd.price - disc.discountAmount
                    newProd.displayString = `Discount of #${disc.discountAmount} is being applied to ${newProd.name}`
                    if (newProd.price < 0){
                        newProd.price = 0
                    }
                    
                    //console.log(newProd)
                   // return newProd

                }else{

                    console.log('this is percentage rate')
                    newProd = prod
                    newProd.price = newProd.price - (newProd.price * (disc.discountAmount/100))
                    newProd.displayString = `Discount of ${disc.discountAmount}% is being applied to ${newProd.name}`
                    if (newProd.price < 0){
                        newProd.price = 0
                    }
                    
                }
        }else{
            newProd = prod
        }

    }else{

            newProd = prod
    }

    console.log(newProd)

    return newProd
}
   




const Product = mongoose.model('Product', productSchema)

module.exports = Product