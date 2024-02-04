const express=require('express');
const app=express();
const QuotesRouter=require('./routes/quouteRouter')


app.use('/api/v1/getrandomquote',QuotesRouter)

module.exports=app

