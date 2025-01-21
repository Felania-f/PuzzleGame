import mongoose from 'mongoose';
import game from '../schemas/Game'
enum Status {
    WAITING = 'waiting',
    STARTED = 'started'
}
async function connectDatabase() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to MongoDB');
}
const data = {
    id: 34,
    level: 3,
    status: 'waiting',
    players: [{
        name: 'zean',
        position: {
            x: 31,
            y: 5
        }
    },
    {
        name: 'malprop',
        position: {
            x: 3,
            y: 51
        }
    }],
}

async function createGame() {
    await connectDatabase();
    const games = new game({
        level: 3,
        status: Status.WAITING
    })

    await games.save();
    return games
}
async function joinGame({ gameId, playerName }: { gameId: number, playerName: string }) {
    await connectDatabase();
    const games = await game.findById(gameId);
    const newPlayers = games?.players[0] ? [games?.players[0], { name: playerName }] : [{ name: playerName }]
    const updatedGame = await game.findOneAndUpdate(
        { _id: gameId },
        { players: newPlayers },
        { new: true }
    );
    return updatedGame

}

export {
    createGame, joinGame
}