import express, { Request, Response } from 'express'
import { createGame, joinGame } from '../functions'
const router = express.Router()
router.post('/create', async (req: Request, res: Response) => {

    res.status(201).json(await createGame())
})
router.post('/join', async (req: Request, res: Response) => {

    res.status(201).json(await joinGame(req.body))
})
export default router
