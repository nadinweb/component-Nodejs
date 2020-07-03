const express=require('express');
const app=express();
require('./boot/bootstrap')(app);
require('./components/router')(app);
const {config}=require('./config/config');


const appliction=()=>{
    try {
        console.log(`server running at port:${config.port}`);
        app.listen(config.port);
    } catch (error) {
        if (error) throw error
    }
}


module.exports=appliction;