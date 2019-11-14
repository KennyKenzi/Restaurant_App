var Discount = require('./discountModel')

const mongoose = require ('mongoose')

const productSchema = new mongoose.Schema({

    productGroup:{
        type: String,
        required: true,
        unique: true
    },
    productGroupID:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: true,
        trim: true
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

    activeStatus: {
        type: Boolean,
        required: true
    }
})



productSchema.statics.calculateDiscount= async (discountID)=>{

    const disc = await Discount.findById(discountID)
    const prod = this
    console.log(disc)
    console.log(prod)
    return disc


}

const Product = mongoose.model('Product', productSchema)

module.exports = Product