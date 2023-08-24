import { Router, Request, Response } from "express";
import MongoEncounter from "../models/MongoEncounter";
import EncounterController from "../controllers/EncounterController";
const EncounterRouter = Router();

const encounterController = new EncounterController(new MongoEncounter());

EncounterRouter.get("/:id", async (req: Request, res: Response) => {
  const encounter = await encounterController.getOne(req.params.id);
  return res.json(encounter);
});

EncounterRouter.get("/", async (req: Request, res: Response) => {
  const encounters = await encounterController.list();
  return res.json(encounters);
});

EncounterRouter.post("/", async (req: Request, res: Response) => {
  const encounters = await encounterController.store(req.body);
  return res.json({
    id: encounters.id,
  });
});

export default EncounterRouter;
