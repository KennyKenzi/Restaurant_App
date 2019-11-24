var Discount = require('../models/discountModel')

calculateProdDiscount = async (prod)=>{
console.log('5.6',prod)
    let newProd
     

    if(prod.discountID){
    
        const disc = await Discount.findById(prod.discountID)
        console.log('prod has discount', disc.discountType)
        

        if(disc.activeStatus){

                if(disc.discountType === 'Flat'){

                    console.log('6','this is flat rate')
                    newProd=prod
                   // newProd.originalPrice = prod.price
                    newProd.discountedPrice = newProd.discountedPrice - disc.discountAmount
                    newProd.displayStringForProd = ` Discount of #${disc.discountAmount} is being applied to each ${newProd.unitOfMeasure} of ${newProd.name}`
                    if (newProd.discountedPrice < 0){
                        newProd.discountedPrice = 0
                    }
                    
                    //console.log(newProd)
                   // return newProd

                }else if (disc.discountType === 'Percentage'){

                    console.log('7','this is percentage rate')
                    newProd = prod
                  //  newProd.originalPrice = prod.price
                    newProd.discountedPrice = newProd.discountedPrice - (newProd.discountedPrice * (disc.discountAmount/100))
                    newProd.displayStringForProd = `Discount of ${disc.discountAmount}% is being applied to each ${newProd.unitOfMeasure} of ${newProd.name}`
                    if (newProd.price < 0){
                        newProd.price = 0
                    }
                    
                }
        }else{
            newProd = prod
            newProd.discountedPrice = prod.price
        }

    }else{

            newProd = prod
            newProd.discountedPrice = prod.discountedPrice
    }

    console.log('final',newProd)
    return newProd
}

module.exports = calculateProdDiscount
