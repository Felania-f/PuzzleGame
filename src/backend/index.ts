import express from 'express'
import cors from 'cors'
import movement from './routes/movement'
import game from './routes/game';
const port = process.env.PORT || 3000;
const app = express()
app.use(cors())
app.use(express.json());

app.use('/api/v1/game', game)
app.use('/api/v1/movement', movement)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
