import * as express from "express";
import * as helmet from "helmet";
import * as winston from "winston";

let app: express.Application = express();

app.use(helmet());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('<h1>node_app</h1>');
});

app.listen(3000, () => {
    winston.log("info", "http://localhost:3000");
});
