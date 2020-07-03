class postsController{
    index(req,res){
        res.send('post table')
    }
    process(req,res){
        res.send('process post')
    }
}

module.exports=new postsController;