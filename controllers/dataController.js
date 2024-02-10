const UserData=require('../modals/userModals');

exports.getAllUser= async(req,res)=>{
    const userdata= await UserData.find()
   res.status(200).json({
        status:'success',
        data:{
            userdata
        }
    })
}

exports.addNewUser= async (req,res)=>{
    try{

    const user=await UserData.create({
        name:req.body.name,
        password:req.body.password})
    res.status(200).json({
        status:'success',
        data:
        user
    })
}
catch(err){
    res.status(400).json({
        status:'failure',
        message:err
    })
}
}