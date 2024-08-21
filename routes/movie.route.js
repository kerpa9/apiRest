import Router from "express";
import { readJSON } from "../utils/utils.js";
import { MovieController } from "../controllers/movies.controller.js";

const movies = readJSON("../movies.json");

export const moviesRouter = Router();

moviesRouter.get("/", MovieController.getAll);

moviesRouter.get("/:id", MovieController.getOne);

moviesRouter.post("/", MovieController.create);

moviesRouter.delete("/:id", MovieController.delete);

moviesRouter.patch("/:id", MovieController.update);
