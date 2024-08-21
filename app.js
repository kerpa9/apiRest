import express, { json } from "express"; // require -> commonJS
import { moviesRouter } from "./routes/movie.route.js";
import { corsMiddleware } from "./middlewares/cors.js";
// import { readJSON } from "../utils/utils.js";

// Leer JSON en ESModules
// import fs from "node:fs";
// const movies = JSON.parse(fs.readFileSync("./movies.json", "utf-8"));

// Leer JSON en ESModules recomendado

// const movies = readJSON("../movies.json");

const app = express();
app.use(json());
app.use(corsMiddleware());
app.disable("x-powered-by"); // deshabilitar el header X-Powered-By: Express

// métodos normales: GET/HEAD/POST
// métodos complejos: PUT/PATCH/DELETE

// CORS PRE-Flight
// OPTIONS

// Todos los recursos que sean MOVIES se identifica con /movies
app.use("/movies", moviesRouter);
const PORT = process.env.PORT ?? 3100;

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
