import * as express from 'express';
import ssr from './ssr';
const app = express();

app.get('/', async (req: any, res: any, next: any) => {
  const {html, ttRenderMs} = await ssr(`${req.protocol}://${req.get('host')}/index.html`);
  // Add Server-Timing! See https://w3c.github.io/server-timing/.
  res.set('Server-Timing', `Prerender;dur=${ttRenderMs};desc="Headless render time (ms)"`);
  return res.status(200).send(html); // Serve prerendered page as response.
});

app.listen(8080, () => console.log('Server started. Press Ctrl+C to quit'));