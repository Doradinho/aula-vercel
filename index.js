import express from 'express';
import { montadoras, veiculos} from './dados.js';

const app = express();
app.use(express.json());

app.get('/veiculo',(req,res)=>{
    res.status(200).json("{'Server':'ok'}");
})

app.listen(3000,()=>{
    let data = new Date();
    console.log(`Sistema inicializado: \nInf:${data}`);
    console.log('http://localhost:3000/');
})