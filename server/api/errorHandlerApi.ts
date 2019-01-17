import {Request, Response, ErrorRequestHandler, NextFunction}  from 'express';

export function errorHandlerApi(err:ErrorRequestHandler , req: Request, res: Response, next: NextFunction){
    console.error(`API error handler executada: ${err}`);
    res.status(500).json({
        errorCode: '500',
        message: 'Erro interno do servidor'
    })
}