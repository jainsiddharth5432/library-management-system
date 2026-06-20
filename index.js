const express= require('express');

const app= express();

const port =8081;

app.use(express.json());

app.get('/',(req,res)=>{
    res.status(200).json({
        message:"home page"
    })
})

// app.all('*',(req,res)=>{
//     res.status(500).json({
//         message:"page not found"
//     })
// })

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})