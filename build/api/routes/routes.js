"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Ok. Have been passed'); });
        app.route('/ola/:nome').get(function (req, res) { return ("Retorno: , " + req.params.nome); });
    };
    return Routes;
}());
exports.default = Routes;
