import express from "express";
import cors from "cors";
import routeProduto from "./routes/route.produto.js";

const app = express();

app.use(express.json());
app.use(cors());

//Rotas
app.use(routeProduto);

app.listen(3001, function(){
  console.log("Servidor rodando na porta 3001");
});


  