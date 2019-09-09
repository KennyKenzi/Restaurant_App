
import axios from 'axios'



const backendurl = 'http://localhost:4000/api';

const api={
    productGroup: backendurl+'/productGroups',
    productGroupUpdate: backendurl + '/productGroup/update/',
    product: backendurl+'/products',
    productUpdate: backendurl + '/product/update/',
    productMiniSale : backendurl + '/product/sale/'
}


const apiCalls={

    getAllProductGroups: ()=>{
         return axios.get(api.productGroup)
    },

    getAllProducts: ()=>{
        return axios.get(api.product)
   },

    getProductGroupFromID: (arg)=>{
        //arg : productgroupID
       return axios.get(api.productGroupUpdate +arg)
        
    },

    getProductFromID: (arg)=>{
       
        return axios.get(api.productUpdate +arg)   
    },

    getProductFromGroupID: (arg)=>{
        //arg: productgroupid
        return axios.get(api.productMiniSale + arg)
        
    },

    updateProductGroup: (arg1, arg2)=>{  
        //arg1 : query parameter
        //arg2: body to post

        axios.post(api.productGroupUpdate + arg1, arg2)
        .then((res)=>{
            return res.data
        })
    },

    createProductGroup: (arg1)=>{  
        //arg1: body to post
        
        axios.post(api.productGroup, arg1)
        .then((res)=>{
            return res.data
        })
    },

    updateProduct: (arg1, arg2)=>{  
        //arg1 : query parameter
        //arg2: body to post

       return axios.post(api.productUpdate + arg1, arg2)
   
    },

    createProduct: (arg1)=>{  
        //arg1: body to post
        
       return axios.post(api.product, arg1)

    }


}




export default apiCalls