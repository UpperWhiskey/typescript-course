"use strict";
exports.__esModule = true;
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/').get(function (req, res) { return res.send('Salve parceria'); });
        app.route('/ola/:nome').get(function (req, res) { return ("Salve, " + req.params.nome); });
    };
    return Routes;
}());
exports["default"] = Routes;
