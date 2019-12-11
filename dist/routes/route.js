"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BaseRoute
 *
 * @class BaseRoute
 */
var BaseRoute = /** @class */ (function () {
    /**
     * Constructor
     *
     * @class BaseRoute
     * @method constructor
     */
    function BaseRoute() {
        this.title = "PuppeteerSSR";
        this.scripts = [];
    }
    /**
     * Add a JS external file to the request
     *
     * @class BaseRoute
     * @method addScript
     * @param src {string} The src to the external JS file
     * @return {BaseRoute} The self for chaining
     */
    BaseRoute.prototype.addScript = function (src) {
        this.scripts.push(src);
        return this;
    };
    BaseRoute.prototype.render = function (req, res, view, options) {
        // add constants
        res.locals.BASE_URL = "/";
        // add scripts 
        res.locals.scripts = this.scripts;
        // add title
        res.locals.title = this.title;
        res.render(view, options);
    };
    return BaseRoute;
}());
exports.BaseRoute = BaseRoute;
