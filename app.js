const express=require('express');
const app=express();
const QuotesRouter=require('./routes/quouteRouter')
const UserRouter=require('./routes/userRouter')
app.use(express.json());

app.use('/api/v1/getrandomquote',QuotesRouter)
app.use('/api/v1/users',UserRouter)

module.exports=app

