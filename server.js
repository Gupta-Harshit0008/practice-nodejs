const app=require('./app')
const dotenv=require('dotenv')
const mongoose= require('mongoose')

dotenv.config({path: './config.env' })
// console.log(process.env)
const DB=process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
mongoose.connect(DB).then(console.log('DB connection successfull'))

const port=process.env.PORT;
app.listen(port, ()=>{
    console.log(`app is running at port: ${port}`)
})