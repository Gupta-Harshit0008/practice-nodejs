const mongoose=require('mongoose')

const quotesSchema= new mongoose.Schema({
    data:[String]
});

const Quote= mongoose.model('Quote',quotesSchema)

module.exports=Quote;