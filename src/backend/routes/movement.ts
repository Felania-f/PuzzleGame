import express, { Request, Response } from 'express'
const router = express.Router()
router.get('/', async (req: Request, res: Response) => {
    res.status(201).json({ success: true, data: true })
})
export default router
