// basic node express ts server
import express from 'express';

const app = express();

app.get('/api/greeting', (req, res) => {
  res.send({ message: 'Hello from express' });
});

app.listen(3000, () => {
  console.log('server started');
});
