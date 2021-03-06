const mongoose = require ('mongoose')

const productGroupSchema = new mongoose.Schema({

    productGroup:{
        type: String,
        required: true,
        unique: true
    },

    discountID: {
        type: String
    },

    activeStatus:{
        type: Boolean,
        required: true
        // default: true
    }

})

const ProductGroup = mongoose.model('ProductGroup', productGroupSchema)

module.exports = ProductGroup