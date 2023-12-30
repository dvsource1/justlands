import express from 'express';
import mongoose from 'mongoose';

const MONGODB_URL = 'mongodb://127.0.0.1:27017/base';

const app = express();

mongoose
  .connect(MONGODB_URL)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB', error));

app.get('/api/greeting', (req, res) => {
  res.send({ message: 'Hello from express' });
});

app.listen(3000, () => {
  console.log('server started');
});
