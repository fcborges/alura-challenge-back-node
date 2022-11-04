import express from "express";
import FilmesController from "../controllers/filmesController.js";

const router = express.Router();

router
  .get("/filmes", FilmesController.listarFilmes)
  .get("/filmes/id", FilmesController.listarFilmesPorId)
  // .post("/autores", AutorController.cadastrarAutor)
  // .put("/autores/:id", AutorController.atualizarAutor)
  // .delete("/autores/:id", AutorController.excluirAutor)

export default router;   