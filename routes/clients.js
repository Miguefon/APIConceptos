const express=require("express");
const router=express.Router();

let clients=[
    {
        
    id:1,
    nombre:"Miguel",
    apellido:"FOnseca",

    }
]


//*READ
router.get("/", (req, res)=>{
    return res.status(200).json({clients})
})

//*CREATE
router.post ("/clients", (req, res)=>{
    const newClient={...req.body, id: clients.length+1};
    clients.push(newClient)
    return res.status(201).json ({message: "Cliente añadido", client:newClient})
})

router.put("/client/:id", (req, res)=>{
    const{id}=req.params;
    const index=clients.findIndex(c=> c.id==id)
    if(index!==-1){
        clients[index]={...req.body, id:parseInt(id)}

    }else{
        return res.status(404).json({message: "No se ha actualizado el cliente"})
    }
    return res.status(200).json(id);
});

router.delete("/client/:id", (req, res)=>{
    const{id}=req.params;
    const index=clients.findIndex(c=> c.id==id);

    if (index!==-1){
        clients.splice(index, 1);
        res.json({message: "Cliente eliminado"})

    }else{
        return res.status(400).json({message: "No se ha encontrado el cliente"})
    }

})
module.exports=router;