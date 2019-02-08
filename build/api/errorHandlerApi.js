"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function errorHandlerApi(err, req, res, next) {
    console.error("API error handler executada: " + err);
    res.status(500).json({
        errorCode: '500',
        message: 'Erro interno do servidor'
    });
}
exports.errorHandlerApi = errorHandlerApi;
