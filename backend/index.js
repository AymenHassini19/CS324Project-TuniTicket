const express=require("express")
const app=express()
const userRoute=require("./Routes/userRoute")
const dotenv=require("dotenv")
dotenv.config()

app.use(express.json())
app.use("",userRoute)

const port=process.env.PORT
app.listen(port,(error)=> {
    if (error){
        console.log("there is a problem")
    } else {
        console.log(`server is running on ${port}`)
    }
})

