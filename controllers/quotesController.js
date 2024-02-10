
    const Quote=require('../modals/quoteModals')

    function between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  exports.getQuote= async (req,res)=>{
   const quoteArray = await Quote.find()
   let quotesArray=quoteArray[0].data
    let val=between(0,50)
  let quote=quotesArray[val]
  if(quotesArray.length < val)
  return  res.status(404).json({
        status:'failure',
        message:'Adding more quotes.. sorry for the inconvinces'
    })
    res.status(200).json({
        status:'success',
        data:quote
    })
    
  }

  exports.addQuote = async(req,res)=>{
try{
  const quotes= await Quote.create(req.body)

  res.status(200).json({
    status:'success',
    data:{
      quotes
    }
  })
}
    catch (err){
      res.status(400).json({
        status:'failure',
        message:err
      })
    }
  }