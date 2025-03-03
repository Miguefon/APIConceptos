const express= require("express");
const app=express();
const port=3000;
const clientsRoute=require("./routes/clients")

app.use(express.json());
app.use(clientsRoute);


app.listen(port, ()=>{
    console.log(`Api Corriendo en http://localhost:${port}`);

})

app.get("/", (req, res)=>{
    return res.status(200).json({message:"Hola"});
})
