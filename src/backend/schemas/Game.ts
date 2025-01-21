import mongoose, { Document, Schema } from 'mongoose';
interface position {
  x: number,
  y: number
}
interface player {
  name: string
  position: position
}
interface game extends Document {
  level: number;
  status: string;
  players: player[]
  createdAt: Date;
  updatedAt: Date;
}

const gameSchema = new Schema<game>({
  level: { type: Number, required: true, },
  status: { type: String, required: false, },
  players: [{
    name: { type: String, required: false },
    position: {
      x: { type: Number, required: false },
      y: { type: Number, required: false }
    }
  }],
}, {
  timestamps: true,
});

const game = mongoose.model<game>('game', gameSchema);

export default game;