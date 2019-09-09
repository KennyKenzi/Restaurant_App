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

    activeStatus: {
        type: Boolean,
        required: true
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product