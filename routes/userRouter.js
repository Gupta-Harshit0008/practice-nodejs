const express=require('express');
const userData=require('../controllers/dataController')

const DataRouter= express.Router();
DataRouter.route('/').get(userData.getAllUser).post(userData.addNewUser)

module.exports=DataRouter