import { Router } from "express";
export const routers = new Router();

const Data = [
  {id:"1", firstName:"daniel", lastName:"atube", nationality:"kenyana", course:"medlab" },
  {id:"1", firstName:"samuel", lastName:"mandela", nationality:"south frican", course:"neutriology" },
  {id:"1", firstName:"mayaba", lastName:"mela", nationality:"nigerian", course:"lab sicience" },
]

routers.get('/', (req, res)=>{
  res.send(Data[0]);
});