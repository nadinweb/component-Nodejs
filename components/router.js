const {userRouter}=require('./user/usersRouter');
const {postRouter}=require('./post/postsRouter');
module.exports=(app)=>{
    app.use('/user',userRouter);
    app.use('/post',postRouter);
}