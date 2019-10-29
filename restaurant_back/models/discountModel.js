const mongoose = require ('mongoose')

const discountSchema = new mongoose.Schema({

    discountName:{
        type: String,
        required: true,
        unique: true
    },

    discountAmount:{
        type: Number,
        required: true,
        trim: true
    },

    discountType:{
        type: String,
        required: true
    },

    activeStatus: {
        type: Boolean,
        required: true
    }

})

const Discount = mongoose.model('Discount', discountSchema)

module.exports = Discount