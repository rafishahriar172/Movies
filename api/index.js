import express from "express"

import postRoute from "./routes/posts.js"

const app = express();

app.use(express.json());

app.use("/api/post" , postRoute)

app.listen(5000,()=>{
    console.log("connected")
     
})