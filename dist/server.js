"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var bodyParser = __importStar(require("body-parser"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
var morgan_1 = __importDefault(require("morgan"));
var path = __importStar(require("path"));
var errorhandler_1 = __importDefault(require("errorhandler"));
var method_override_1 = __importDefault(require("method-override"));
var index_1 = require("./routes/index");
// import ssr from "./ssr";
/**
 * The Server
 *
 * @class Server
 */
var Server = /** @class */ (function () {
    /**
     * Constructor
     *
     * @class Server
     * @method constructor
     */
    function Server() {
        // create express application
        this.app = express_1.default();
        // configure application
        this.config();
        // add routes
        this.routes();
        // add api
        this.api();
    }
    /**
     * Bootstrap the application
     *
     * @class Server
     * @method bootstrap
     * @static
     * @return Returns the newly created injector for this app. Returns the newly created injector for this app.
     */
    Server.bootstrap = function () {
        return new Server();
    };
    /**
     * Create REST Api routes
     *
     * @class Server
     * @method api
     */
    Server.prototype.api = function () { };
    /**
     * Configure application
     *
     * @class Server
     * @method config
     */
    Server.prototype.config = function () {
        // add static paths
        this.app.use(express_1.default.static(path.join(__dirname, "public")));
        this.app.set("trust proxy", true);
        // configure pug
        // this.app.set("views", path.join(__dirname, "views"));
        // this.app.set("view engine", "pug");
        // use logger middleware
        this.app.use(morgan_1.default("dev"));
        // use json form parse middleware
        this.app.use(bodyParser.json());
        // use query string parser middleware
        this.app.use(bodyParser.urlencoded({
            extended: true
        }));
        // use cookie parser middleware
        this.app.use(cookie_parser_1.default("PuppeteerSSR"));
        // use override middleware
        this.app.use(method_override_1.default());
        // catch 404 and forward to error handler
        this.app.use(function (err, req, res, next) {
            err.status = 404;
            next(err);
        });
        // use handling
        this.app.use(errorhandler_1.default());
    };
    /**
     * Create router
     *
     * @class Server
     * @method router
     */
    Server.prototype.routes = function () {
        var router;
        router = express_1.default.Router();
        // IndexRoute
        index_1.IndexRoute.create(router);
        // use router middleware
        this.app.use(router);
    };
    return Server;
}());
exports.Server = Server;
