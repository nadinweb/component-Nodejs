class userController{
    index(req,res){
        res.send('user table')
    }
    process(req,res){
        res.send('process user')
    }
}


module.exports=new userController;