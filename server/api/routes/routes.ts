import {Application, Request, Response} from 'express';

class Routes{
    
    constructor(app: Application){
        this.getRoutes(app);
    }
        
    getRoutes(app: Application):void{
        app.route('/')
        .get((req: Request, res: Response)=>
        res.send('Ok. Have been passed'))

        app.route('/ola/:nome')
        .get((req: Request, res: Response)=>
        (`Retorno: , ${req.params.nome}`))
    }
}

export default Routes;