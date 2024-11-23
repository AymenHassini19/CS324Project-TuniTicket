const express=require("express")
const app=express()
const userRoute=require("./Routes/userRoute")
const dotenv=require("dotenv")
const connectDb = require("./config/connectDb")
const cors = require("cors")
//const populate = require("./seeder")
dotenv.config()
app.use(cors())


app.use(express.json())
app.use("/api",userRoute)

connectDb()
//populate()
const port=process.env.SERVER_PORT
app.listen(port,(error)=> {
    if (error){
        console.log("there is a problem")
    } else {
        console.log(`server is running on ${port}`)
    }
})
