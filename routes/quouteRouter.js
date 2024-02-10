const express=require('express');
const quote=require('../controllers/quotesController')

const QuotesRouter= express.Router();
QuotesRouter.route('/').get(quote.getQuote).post(quote.addQuote)

module.exports=QuotesRouter