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
                    newProd.price = newProd.price - disc.discountAmount
                    newProd.displayStringForProd = `Discount of #${disc.discountAmount} is being applied to ${newProd.name}`
                    if (newProd.price < 0){
                        newProd.price = 0
                    }
                    
                    //console.log(newProd)
                   // return newProd

                }else if (disc.discountType === 'Percentage'){

                    console.log('7','this is percentage rate')
                    newProd = prod
                    newProd.price = newProd.price - (newProd.price * (disc.discountAmount/100))
                    newProd.displayStringForProd = `Discount of ${disc.discountAmount}% is being applied to ${newProd.name}`
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

console.log('final',newProd)
return newProd
}

module.exports = calculateProdDiscount
