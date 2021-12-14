import express from 'express';
import bodyParser from 'body-parser';
import custRoutes from './routes/cust.js';
import farmRoutes from './routes/farm.js';

const app =express();
const port=5000;
app.use(bodyParser.json());

app.use('/customer',custRoutes);
app.use('/farm',farmRoutes);
app.get('/',(req,res)=>{
   // console.log('[TEST]!');
    res.send('Hello from Homepage')
});
app.listen(port,()=>console.log(`Server running on port: http://localhost:${port}`));
