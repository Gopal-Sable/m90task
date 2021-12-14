import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';


let Farm = []


router.get('/user', (req, res) => {
    res.send(Farm);
});

//create user
router.post('/create', (req, res) => {
    const user = req.body;
   
    Farm.push({...user,id : uuidv4()});
    res.send(user);
});

router.delete('/delete:id',(req,res)=>{
    const {id}=req.params;
    // const foundCust=customer.find(user.id===id);
    Farm=Farm.filter((user)=>user.id !== id);
    res.send(Farm);
})
export default router;