import { swaggerDocs } from './module/swapi/swagger.docs';
import express, { Express, Request, Response } from 'express';
import router from './module/swapi/routes/swapi.routes'
import swaggerUi from 'swagger-ui-express';
const app: Express = express();
app.use(express.json());
app.use(router);

app.get('/', (req: Request, res: Response) => {
    res.json({ Message: "Hello TransformUs Task" })
});
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
export default app;