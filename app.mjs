import express from 'express';
const app = express();
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("I am working !! Hurray! We have made some changes")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
});