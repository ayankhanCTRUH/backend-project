import dotenv from 'dotenv'
import connectDB from "./db/index.js";

dotenv.config({path:'./env'})
connectDB().then((data)=>{
app.listen(process.env.PORT || 8000, ()=>{
    console.log(`listening on port${ process.env.PORT} `)
})
}).catch(err=>{

    console.log("MONGO CONNECTION FAILED: " + err)
})