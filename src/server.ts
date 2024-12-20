import express from "express";
import { router } from "./routes/";
import { routeLogger } from "./middlewares/route-logger";

const app = express();

// Middleware
app.use(express.json());
app.use(routeLogger);

// Router
app.use('/api', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
