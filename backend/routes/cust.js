import express from "express";
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';


let customer = []


router.get('/user', (req, res) => {
    res.send(customer);
});

//create user
router.post('/create', (req, res) => {
    const user = req.body;
   
    customer.push({...user,id : uuidv4()});
    res.send(user);
});

router.delete('/delete:id',(req,res)=>{
    const {id}=req.params;
    // const foundCust=customer.find(user.id===id);
    customer=customer.filter((user)=>user.id !== id);
    res.send(customer);
})
export default router;