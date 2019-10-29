const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const mongoose = require('./db/mongoose');
const cors = require ('cors')

const productRouter = require('./routes/products');
const productGroupRouter = require('./routes/productGroup');
const discountRouter = require('./routes/discount')

const PORT = 4000;



    app.use(bodyParser.json());
    app.use(cors())


    app.use('/', productRouter)
    app.use('/', productGroupRouter)
    app.use('/', discountRouter)




    app.use(function(req, res, next) {
    next(createError(404));
    });
  
  
  
    // error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.send('error');
    
    });

    app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
    });

    module.exports = app 