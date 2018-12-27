import {Router, Request, Response} from 'express';

export const router = Router();

router.get('/mensajes',(req: Request, res: Response) =>{
    res.json({
        ok: true,
        mensaje: 'Todo esta bien!!',
    })
});

router.post('/mensajes/:id',(req: Request, res: Response) =>{

    var cuerpo = req.body.cuerpo;
    var de = req.body.de;
    var id = req.params.id;
    var valor1 = Number(req.body.valor1);
    var valor2 = Number(req.body.valor2);

    var suma:number = valor1 + valor2;

    res.json({
        ok: true,
        cuerpo,
        de,
        id,
        suma
    })
});

export default router;