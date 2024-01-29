import {router} from 'express';
import {db} from '../config/database.js'

const routeProduto = router();

routeProduto.get("/produtos", function(req, res){
    db.all('select * from produto', [], function(err, rows){
        if(err)
            return res.status(500).send("Erro ao buscar produtos " + err.message)
        else
            return res.status(200).json(rows);
    });
});

export default routeProduto;