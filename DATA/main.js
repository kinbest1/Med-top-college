import express from 'express';
import { routers as routing } from './apps/routes.js';
const app = express (); 

app.use(express.urlencoded({extended:false}));
app.use(express.static('./public'))
app.use('/navigates', routing)

app.get('/', (req,res)=>{
    res.send('<h2>welcom to Medtop College</h2>')
});


export function start(){
  app.listen(400,()=>{
    console.log('app is listening at localhost: 4000');
  })
}
 