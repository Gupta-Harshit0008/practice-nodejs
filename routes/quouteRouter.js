const express=require('express');
const quote=require('../controllers/quotesController')

const QuotesRouter= express.Router();
QuotesRouter.route('/').get(quote.getQuote)

module.exports=QuotesRouter