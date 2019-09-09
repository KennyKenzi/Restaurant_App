const mongoose = require('mongoose');




mongoose.connect('mongodb://127.0.0.1:27017/restaurant-app',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify: false
})
.then(()=>{
    console.log('John is happy, it has connected')

})
// const connection = mongoose.connection;
// connection.once('open', function() {
//     console.log("John is happy, it has connected established successfully");
// })
.catch((e)=>{
    console.log(e)
})

module.exports = mongoose