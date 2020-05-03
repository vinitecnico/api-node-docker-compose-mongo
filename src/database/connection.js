import mongoose from 'mongoose';

const { MONGODB_DATABASE, MONGODB_URI } = process.env;

const dbPath = `${MONGODB_URI}/${MONGODB_DATABASE}`;
mongoose.connect(dbPath, {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.on('error', () => {
  console.log('> error occurred from the database');
});

db.once('open', () => {
  console.log('> successfully opened the database');
});

export default mongoose;
