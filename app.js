const express= require("express");
const app=express();
const port=3000;
app.use(express.json());

let clients=[
    {
        
    id:1,
    nombre:"Miguel",
    apellido:"FOnseca",

    }
]

app.listen(port, ()=>{
    console.log(`Api Corriendo en http://localhost:${port}`);

})

app.get("/", (req, res)=>{
    return res.status(200).json({clients})
})

app.post ("/clients", (req, res)=>{
    const newClient={...req.body, id: clients.length+1};
    clients.push(newClient)
    return res.status(201).json ({message: "Cliente añadido", client:newClient})
})