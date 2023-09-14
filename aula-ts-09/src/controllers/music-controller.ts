import { Request, Response } from "express";
import musicService from "../services/music-service";
import { musicSchemma } from "schemma/musica.schemma";
import { Music } from "protocols";


function getMusics(req: Request, res: Response) {
  const musics = musicService.getMusics();
  res.send(musics);
}

function createMusic(req: Request, res: Response) {
  const { error } = musicSchemma.validate(req.body);
  if (error) {
    // Se houver um erro de validação, retorne uma resposta de erro.
    return res.status(400).json({ error: error.details[0].message });
  }
  
  const music = req.body as Music; // Realiza a asserção de tipo
  musicService.createMusic(music);  musicService.createMusic(music);
  res.sendStatus(201);
}

const musicController = {
  getMusics,
  createMusic
}

export default musicController;