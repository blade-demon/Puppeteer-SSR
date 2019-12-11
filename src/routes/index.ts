import { NextFunction, Request, Response, Router } from "express";
import { BaseRoute } from "./route";
import ssr from '../ssr';
/**
 * IndexRoute
 * 
 * @class IndexRoute
 */
export class IndexRoute extends BaseRoute {
  /**
   * Constructor
   * 
   * @class IndexRoute
   * @method constructor
   */
  constructor() {
    super();
  }

  /**
   * Create the router
   * 
   * @class IndexRoute
   * @method create
   * @static
   * @param router 
   */
  public static create(router: Router) {
    console.log("[IndexRoute::create] Creating index route");
    
    // add home page route
    router.get("/", (req: Request, res: Response, next: NextFunction) => {
      new IndexRoute().index(req, res, next);
    })
  }

  /**
   * The home page route
   * 
   * @class IndexRoute
   * @method index
   * @param req {Request} The express Request Object.
   * @param res {Response} The express Response Object.
   * @param next {NextFunction} Execute the next method.
   */
	public async index(req: Request, res: Response, next: NextFunction) {
		const html = await ssr('http://localhost:62476/');
		res.set('Server-Timing', `Prerender;dur=1000;desc="Headless render time (ms)"`);
		res.send(html);
  }
}